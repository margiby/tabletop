import { createTreeDiagram } from "./diagramFactory";
import { diagramRegistry } from "./diagramRegistry";
import type { TreeFactoryNodeConfig } from "../data/flow-types";

/**
 * Sucht einen Knoten in der Hierarchie und toggelt dessen 'collapsed'-Status.
 */
function toggleFlag(node: TreeFactoryNodeConfig, nodeId: string): boolean {
  if (node.id === nodeId) {
    node.collapsed = !node.collapsed;
    return true;
  }
  if (node.children) {
    for (const child of node.children) {
      if (toggleFlag(child, nodeId)) {
        return true;
      }
    }
  }
  return false;
}

/**
 * Aktualisiert die Hierarchie im Registry-Eintrag und erstellt das Diagramm neu.
 */
export function toggleNodeCollapse(diagramId: string, nodeId: string): void {
  const entry = diagramRegistry[diagramId];
  if (!entry || !entry.treeConfig) return;

  const found = toggleFlag(entry.treeConfig, nodeId);
  if (!found) return;

  // Diagramm neu erzeugen
  delete diagramRegistry[diagramId];
  createTreeDiagram(
    diagramId,
    entry.treeConfig,
    entry.factoryOptions || { elkOptions: entry.elkOptions }
  );
}

/**
 * Setzt rekursiv das 'collapsed'-Flag ab einer bestimmten Tiefe.
 */
export function collapseDeep(node: TreeFactoryNodeConfig, depth = 0): void {
  if (depth >= 1) {
    node.collapsed = true;
  }
  node.children?.forEach((child) => collapseDeep(child, depth + 1));
}

/**
 * Klappt alle Knoten im Baum ein.
 */
function setCollapseState(
  node: TreeFactoryNodeConfig,
  collapsed: boolean
): void {
  node.collapsed = collapsed;
  if (node.children) {
    for (const child of node.children) {
      setCollapseState(child, collapsed);
    }
  }
}

/**
 * Klappt alle Knoten ein (bis 1 Ebene) oder aus und generiert das Diagramm neu.
 */
export function toggleAllNodes(diagramId: string, collapse: boolean): void {
  const entry = diagramRegistry[diagramId];
  if (!entry || !entry.treeConfig) return;

  if (collapse) {
    // nur bis Ebene 1 zu kollabieren
    collapseDeep(entry.treeConfig, 0);
  } else {
    // Für das Aufklappen verwenden die bestehende setCollapseState Funktion
    setCollapseState(entry.treeConfig, false);
  }

  // Diagramm neu erzeugen
  delete diagramRegistry[diagramId];
  createTreeDiagram(
    diagramId,
    entry.treeConfig,
    entry.factoryOptions || { elkOptions: entry.elkOptions }
  );
}
