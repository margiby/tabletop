import type {
  TreeFactoryNodeConfig,
  TableDataItem,
} from "../components/Content/HomePage/InteractiveDiagram/data/flow-types";
import type { IntlShape } from "react-intl";

type BioDataFields = {
  name_german: string;
  name_english: string;
  type?: number;
  [key: string]: unknown;
};

type BioDataItem = {
  model: string;
  pk: number;
  fields: BioDataFields;
};

/**
 * Wandelt die flachen Daten aus dump_BioData_bet.json in eine hierarchische Baumstruktur um,
 * die von createTreeDiagram verwendet werden kann.
 * @param bioData Das Array von Objekten aus der JSON-Datei.
 * @param language Die zu verwendende Sprache ('de' oder 'en').
 * @returns Eine Konfiguration für den Wurzelknoten des Baumes.
 */
export function transformBioData(
  bioData: BioDataItem[],
  language: string,
  intl: IntlShape
): TreeFactoryNodeConfig {
  // 1. Filtern und Mappen der relevanten Daten
  const types = bioData.filter(
    (item) => item.model === "processes.processchaintype"
  );
  // 2. Filtert die Gruppen aus den Daten
  const groups = bioData.filter(
    (item) => item.model === "processes.processchaingroup"
  );
  // 3. Filtert die Prozessketten aus den Daten
  const chains = bioData.filter(
    (item) => item.model === "processes.processchain"
  );

  // 4. Erstellt eine Map für die Typnamen (de/en)
  const typeMap = new Map<number, string>();
  types.forEach((type) => {
    typeMap.set(
      type.pk,
      language === "de" ? type.fields.name_german : type.fields.name_english
    );
  });

  // 5. Erstellt eine Map für die Gruppennamen und deren Typ-IDs
  const groupMap = new Map<number, { name: string; typeId: number }>();
  groups.forEach((group) => {
    groupMap.set(group.pk, {
      name:
        language === "de"
          ? group.fields.name_german
          : group.fields.name_english,
      typeId: group.fields.type as number,
    });
  });

  // 6. Ordnet Gruppen den jeweiligen Typen zu
  const groupsMap = new Map<number, TreeFactoryNodeConfig[]>();
  groups.forEach((group) => {
    const parentTypeId = group.fields.type;
    if (typeof parentTypeId !== "number") {
      return;
    }
    if (!groupsMap.has(parentTypeId)) {
      groupsMap.set(parentTypeId, []);
    }
    groupsMap.get(parentTypeId)!.push({
      id: `group-${group.pk}`,
      data: {
        label:
          language === "de"
            ? group.fields.name_german
            : group.fields.name_english,
        description: intl.formatMessage({ id: "prozessgruppe_description" }),
      },
      children: [],
    });
  });

  // 7. Ordnet Prozessketten den jeweiligen Gruppen zu
  const chainsMap = new Map<number, TableDataItem[]>();
  chains.forEach((chain) => {
    // Holt die Gruppen-ID
    const parentGroupId = chain.fields.group as number;
    // Initialisiert das Array für die Gruppe
    if (!chainsMap.has(parentGroupId)) {
      chainsMap.set(parentGroupId, []);
    }
    // Holt die Gruppeninfos (Name, Typ-ID) aus groupMap
    const groupInfo = groupMap.get(parentGroupId);
    // Holt den Typnamen aus typeMap
    const typeInfo = groupInfo ? typeMap.get(groupInfo.typeId) : undefined;

    // Fügt die Prozesskette als Objekt in das Array der Gruppe ein
    chainsMap.get(parentGroupId)!.push({
      id: `chain-${chain.pk}`,
      data: {
        label:
          language === "de"
            ? chain.fields.name_german
            : chain.fields.name_english,
        group: groupInfo ? groupInfo.name : "N/A", // Gruppenname oder "N/A"
        type: typeInfo ? typeInfo : "N/A", // Typname oder "N/A"
      },
    });
  });

  // 8. Baut die Typ-Knoten mit ihren Gruppen und Prozessketten
  const typeNodes: TreeFactoryNodeConfig[] = types.map((type) => {
    const childGroups = groupsMap.get(type.pk) || [];
    // Fügt jeder Gruppe die zugehörigen Prozessketten als Tabelle hinzu
    childGroups.forEach((groupNode) => {
      const groupId = parseInt(groupNode.id!.split("-")[1]);
      const groupChains = chainsMap.get(groupId) || [];
      if (groupChains.length > 0) {
        groupNode.data.table = groupChains;
        groupNode.hasTable = true;
      }
    });

    return {
      id: `type-${type.pk}`,
      data: {
        label:
          language === "de"
            ? type.fields.name_german
            : type.fields.name_english,
        description: intl.formatMessage(
          { id: "prozesskettentyp_description" },
          { count: childGroups.length }
        ),
      },
      children: childGroups,
      className: "data-category-node",
    };
  });

  // 9. Erstellt den Wurzelknoten für das Baumdiagramm
  const rootNode: TreeFactoryNodeConfig = {
    id: "prozessketten_label",
    data: {
      label: intl.formatMessage({ id: "prozessketten_label" }),
      description: intl.formatMessage({
        id: "prozessketten_root_description",
      }),
    },
    className: "data-node",
    children: typeNodes,
  };

  // 10. Gibt die Baumstruktur zurück
  return rootNode;
}
