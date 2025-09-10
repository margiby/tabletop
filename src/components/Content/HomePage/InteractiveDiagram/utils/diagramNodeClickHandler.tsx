import { MouseEvent } from "react";
import type { Node } from "@xyflow/react";
import type { DiagramNode } from "../data/flow-types";
import useDiagramStore from "../diagrammHooks/useDiagramStore";
import { diagramRegistry } from "./diagramRegistry";

/**
 * Handler für Node-Klicks mit Collapse-Support für treeConfig-Diagramme.
 */
export default function diagramNodeClickHandler(
  toggleCollapse: (id: string) => void
) {
  return function handleNodeClick(
    event: MouseEvent,
    node: Node<DiagramNode["data"]>
  ): void {
    event.preventDefault();

    const { setTableData, setTableTitle, setDiagramId } =
      useDiagramStore.getState();
    const diagramId = node.id;
    const current = useDiagramStore.getState().diagramId;
    const currentDiagram = diagramRegistry[current];

    // Tabellendaten setzen wenn vorhanden - Toggle-Funktionalität
    if (node.data.table) {
      const currentTableData = useDiagramStore.getState().tableData;
      const currentTableTitle = useDiagramStore.getState().tableTitle;
      const nodeTitle = node.data.cleanLabel || (node.data.label as string);
      
      // Toggle: Wenn dieselbe Tabelle bereits geöffnet ist, schließe sie
      if (currentTableData === node.data.table && currentTableTitle === nodeTitle) {
        setTableData(null);
        setTableTitle(null);
      } else {
        // Sonst öffne die neue Tabelle
        setTableData(node.data.table);
        setTableTitle(nodeTitle);
      }
      return;
    }

    // Collapse für treeConfig-Diagramme
    if (currentDiagram && currentDiagram.treeConfig) {
      toggleCollapse(diagramId);
      return;
    }

    // Zu Subdiagramm wechseln
    if (diagramRegistry[diagramId]) {
      setDiagramId(diagramId);
      setTableData(null);
      setTableTitle(null);
    } else {
      console.log("Kein Diagramm für:", diagramId);
    }
  };
}
