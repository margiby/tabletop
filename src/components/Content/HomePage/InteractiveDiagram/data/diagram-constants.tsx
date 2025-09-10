import type { ElkLayoutOptions } from "../utils/elkLayout-utils";
import type { NodeDimensions } from "./flow-types";

/**
 * Basiskonfiguration für den ELK-Layout-Algorithmus.
 * Diese Optionen definieren das grundlegende Aussehen und die Anordnung des Diagramms.
 */

export const BASE_ELK_OPTIONS: ElkLayoutOptions = {
    "elk.algorithm": "force",
      "elk.spacing.nodeNode": "100", 
      "elk.force.model": "EADES",
      "elk.force.iterations": "15",
      "elk.interactive": "true",
      "elk.randomSeed": "66666665",
}

// Standardabmessungen für Knoten
export const DEFAULT_NODE_WIDTH = 150;
export const DEFAULT_NODE_HEIGHT = 50;

/**
 * Map zur Zuordnung von CSS-Klassen zu festen Knotengrößen.
 * ELK benötigt diese expliziten Abmessungen für das Layout.
 */
export const nodeDimensionMap: Record<string, NodeDimensions> = {
  "default-node": { width: DEFAULT_NODE_WIDTH, height: DEFAULT_NODE_HEIGHT },
  /*Hauptdiagramm Knoten */
  "xdukte-node": { width: 180, height: 60 },
  "konversion-node": { width: 250, height: 60 },
  "mix-node": { width: 150, height: 60 },
  "prozessketten-node": { width: 180, height: 60 },
  "versorgungsaufgaben-node": { width: 250, height: 60 },
  "versorgungskonzepte-node": { width: 250, height: 60 },
  /* VSK Subdiagramme */
  "tech-logo-node": { width: 250, height: 80 },
  "tech-category-node": { width: 300, height: 60 },
  "tech-item-node": { width: 280, height: 60 },
  /* Prozessketten Subdiagramme */
  "data-node": { width: 320, height: 80 },
  "data-category-node": { width: 400, height: 70 },
  "data-item-node": { width: 650, height: 35 },
};