import type {
  Node,
  NodeProps,
  Edge,
  Position,
  EdgeMarker,
  OnNodesChange,
  OnEdgesChange,
  NodeMouseHandler, 
} from "@xyflow/react";
import type { ElkLayoutOptions } from "../utils/elkLayout-utils";
import { ReactNode, RefObject, type CSSProperties } from "react";

export type NodeDimensions = {
  width: number;
  height: number;
};

// Daten, die jeder Knoten enthalten kann
export type NodeData = {
  label: string | ReactNode; // Knoten-Label, kann auch ReactNode sein
  cleanLabel?: string; // Feld für den reinen Text-Label
  description?: string;
  icon?: ReactNode;
  table?: TableData;
  [key: string]: unknown; // Ermöglicht die Aufnahme beliebiger zusätzlicher Daten.
};

export type DiagramNode = Node<NodeData>; // Spezifischer Knotentyp
export type DiagramEdge = Edge<Record<string, unknown>>; // Allgemeiner Datentyp für Kanten
export type CustomNodeProps = NodeProps<Node<NodeData>>; // Node mit icon

//===================================================================
// Rückgabetyp für useDiagramLayout Hook
//===================================================================

export type UseDiagramLayoutReturn = {
  nodes: DiagramNode[];
  edges: DiagramEdge[];
  onNodesChange: OnNodesChange<DiagramNode>;
  onEdgesChange: OnEdgesChange<DiagramEdge>;
  isLoadingLayout: boolean;
  hasLayouted: boolean;
  flowContainerRef: RefObject<HTMLDivElement | null>;
  collapseNode: (nodeId: string) => void;
  handleToggleAll: (collapse: boolean) => void;
};

// ====================================================================
// Gemeinsamer Basistyp für alle Knotenkonfigurationen
// ====================================================================
export type BaseNodeConfig = {
  className?: string;
  type?: string;
  data: NodeData;
};

// ====================================================================
// Konfigurationen für die Diagramm-Factories
// ====================================================================

export type DiagramFactoryOptions = {
  defaultClassName?: string;
  nodeIdPrefix?: string;
  defaultNodeType?: string;
  defaultEdgeType?: string;
  elkOptions?: ElkLayoutOptions;
  defaultTargetPosition?: Position;
  defaultSourcePosition?: Position;
};

// ====================================================================
// Spezifische Konfigurationen für `createTreeDiagram`
// ====================================================================

export type TreeFactoryNodeConfig = BaseNodeConfig & {
  id?: string; // id ist optional, da sie generiert werden kann
  collapsed?: boolean; // Wenn true, werden Kinder zunächst nicht gerendert
  children?: TreeFactoryNodeConfig[]; // Kinder für die rekursive Erstellung
  hasTable?: boolean; // Wenn true, wird eine Tabelle für diesen Knoten angezeigt
};

// ====================================================================
// Spezifische Konfigurationen für `createFlexibleDiagram`
// ====================================================================

export type DiagramNodeConfig = BaseNodeConfig & {
  id: string; // id ist hier zwingend erforderlich
  sourcePosition?: Position;
  targetPosition?: Position;
};

// Konfiguration für eine Kante in einem flexiblen Diagramm.

export type DiagramEdgeConfig = {
  source: string;
  target: string | string[]; // Unterstützt 1-zu-n-Beziehungen
  id?: string;
  type?: string;
  style?: CSSProperties;
  animated?: boolean;
  markerStart?: EdgeMarker;
  markerEnd?: EdgeMarker;
  [key: string]: unknown;
};

//Repräsentiert die berechneten Edge-Parameter für eine Floating Edge
export type EdgeParams = {
  sx: number; // Source X-Koordinate
  sy: number; // Source Y-Koordinate
  tx: number; // Target X-Koordinate
  ty: number; // Target Y-Koordinate
};

// Die gesamte Konfiguration für ein flexibles Diagramm
export type FlexibleDiagramConfig = {
  nodes: DiagramNodeConfig[];
  edges: DiagramEdgeConfig[];
};

// ====================================================================
// Typen für den Fetch-Status
// ====================================================================
// Ein Zustand, der den Ladeprozess eines Diagramms beschreibt
export type FetchState = {
  data: TreeFactoryNodeConfig | null;
  isLoading: boolean;
  error: Error | null;
};

// ====================================================================
// Typen für die Tabellenkomponente
// ====================================================================
export type TableDataItem = {
  id: string;
  data: {
    type: string;
    group: string;
    label: string;
  };
};
export type TableData = TableDataItem[];
export type TableComponentProps = {
  data: TableData;
  title?: string | null;
  onClose: () => void;
};

// ====================================================================
// Typen für die Tooltip-Komponente
// ====================================================================

export type TooltipProps = {
  visible: boolean;
  x: number;
  y: number;
  content: string;
};
export type TooltipState = {
  visible: boolean;
  x: number;
  y: number;
  content: string;
};

export type UseTooltipReturn = {
  tooltip: TooltipState;
  handleNodeMouseEnter: NodeMouseHandler;
  handleNodeMouseLeave: NodeMouseHandler;
  hideTooltip: () => void;
};

// ====================================================================
// Typen für den Zustand des Diagramms
// ====================================================================
export type Store = {
  diagramId: string;
  setDiagramId: (id: string) => void;
  tableData: TableData | null;
  setTableData: (data: TableData | null) => void;
  tableTitle: string | null;
  setTableTitle: (title: string | null) => void;
};

// ====================================================================
// Typen für Scroll-Utils
// ====================================================================

export type ScrollToOptions = {
  headerOffset?: number;
  behavior?: ScrollBehavior;
  timeout?: number;
};