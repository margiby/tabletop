import type { DiagramEdgeConfig } from "../data/flow-types";
import { MarkerType } from "@xyflow/react";

// Definition der Kanten mit angepassten IDs, Farben und Animationen
export const mainDiagramEdges: DiagramEdgeConfig[] = [
  // Verbindungen von "Xdukte"
  {
    id: "e1",
    source: "xdukte", // Die ID des Quellknotens
    target: "konversionsverfahren", // Die ID des Zielknotens
    markerEnd: { type: MarkerType.ArrowClosed, width: 10, height: 10 }, //Pfeilspitze at end
    style: { stroke: "#a3e635", strokeWidth: 3 }, 
  },
  {
    id: "e2",
    source: "xdukte",
    target: "prozessketten",
    markerEnd: { type: MarkerType.ArrowClosed, width: 10, height: 10 },  
    style: { stroke: "#a5b4fc", strokeWidth: 3 },
  },
  {
    id: "e3",
    source: "xdukte",
    target: "mix",
    markerEnd: { type: MarkerType.ArrowClosed, width: 10, height: 10 }, 
    style: { stroke: "#f87171", strokeDasharray: "5 5", strokeWidth: 3 }, // gestrichelte Linie
    // animated: true,
    
  },
  {
    id: "e4",
    source:"xdukte",
    target: "versorgungskonzepte",
    markerEnd: { type: MarkerType.ArrowClosed, width: 10, height: 10 },  
    style: { stroke: "#a3e635", strokeWidth: 3 }, 
  },
{
    id: "e5",
    source: "xdukte",
    target: "versorgungsaufgaben",
    markerEnd: { type: MarkerType.ArrowClosed, width: 10, height: 10 }, 
    style: { stroke: "#f5d109ff", strokeWidth: 3 }, 
  },
  {
    id: "e6",
    source:"prozessketten",
    target:"mix",
    markerEnd: { type: MarkerType.ArrowClosed, width: 10, height: 10 }, 
    style: { stroke: "#f87171", strokeDasharray: "5 5", strokeWidth: 3 }, 
    // animated: true,
  },
  // Verbindungen von "Versorgungskonzepte"
  {
    id: "e7",
    source:"versorgungskonzepte",
    target: "konversionsverfahren",
    style: { stroke: "#6ee7b7", strokeWidth: 3 },
    markerEnd: { type: MarkerType.ArrowClosed, width: 10, height: 10 }, 
  },
  {
    id: "e8",
    source: "versorgungskonzepte",
    target: "prozessketten",
    markerEnd: { type: MarkerType.ArrowClosed, width: 10, height: 10 }, 
    style: { stroke: "#3730a3", strokeWidth: 3 }, 
  },
    {
    id: "e9",
    source: "versorgungskonzepte",
    target: "mix",
    markerEnd: { type: MarkerType.ArrowClosed, width: 10, height: 10 }, 
    style: { stroke: "#f87171", strokeDasharray: "5 5", strokeWidth: 3 }, 
    // animated: true,
  },
  
  {
    id: "e10",
    source: "versorgungskonzepte",
    target: "versorgungsaufgaben",
    markerEnd: { type: MarkerType.ArrowClosed, width: 10, height: 10 }, 
    style: { stroke: "#f5d109ff", strokeWidth: 3},
  },
];