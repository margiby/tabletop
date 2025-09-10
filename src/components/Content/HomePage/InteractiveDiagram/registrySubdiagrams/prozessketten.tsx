import { diagramRegistry, tryRegisterDiagram } from "../utils/diagramRegistry";
import { createTreeDiagram } from "../utils/diagramFactory";
import { Position } from "@xyflow/react";
import type { ElkLayoutOptions } from "../utils/elkLayout-utils";
import type {
  DiagramFactoryOptions,
  TreeFactoryNodeConfig,
} from "../data/flow-types";
import { collapseDeep } from "../utils/diagramExpandCollapse";
/**
 * Registriert das Prozessketten-Subdiagramm.
 * @param treeConfig Die hierarchische Konfiguration des Diagramms.
 */
export function registerProzesskettenSubdiagram(
  treeConfig: TreeFactoryNodeConfig
): void {
  const diagramId = "prozessketten";
    // Bei Sprachwechsel soll das Diagramm neu registriert werden.
  if (diagramRegistry[diagramId]) {
    delete diagramRegistry[diagramId];
  }

  tryRegisterDiagram(diagramId, () => {
    console.log("AKTION: Registriere Prozessketten Sub-Diagramm...");

    // ELK-Layout-Optionen für eine Baumstruktur
    const elkOptions: ElkLayoutOptions = {
      "elk.algorithm": "org.eclipse.elk.layered",
      "elk.direction": "RIGHT",
      "org.eclipse.elk.layered.spacing.nodeNodeBetweenLayers": "50",
      "org.eclipse.elk.spacing.nodeNode": "10",
      "org.eclipse.elk.layered.spacing.edgeNodeBetweenLayers": "50",
      "org.eclipse.elk.layered.spacing.edgeEdgeBetweenLayers": "10",
      "elk.layered.considerModelOrder.strategy": "NODES_AND_EDGES", // Behalte die Reihenfolge der Knoten im Modell bei
      "elk.layered.cycleBreaking.strategy": "DEPTH_FIRST",
      "elk.layered.nodePlacement.strategy": "NETWORK_SIMPLEX",
      "elk.layered.crossingMinimization.strategy": "LAYER_SWEEP",
    };

    const options: DiagramFactoryOptions = {
      elkOptions,
      defaultTargetPosition: Position.Left,
      defaultSourcePosition: Position.Right,
      defaultClassName: "data-item-node",
    };
    // Setze initial den collapsed-Status
    collapseDeep(treeConfig);

    // Erstelle das Diagramm mit der Tree-Factory
    createTreeDiagram(diagramId, treeConfig, options);
  });
}
