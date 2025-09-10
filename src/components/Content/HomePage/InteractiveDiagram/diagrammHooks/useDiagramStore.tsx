import { create } from "zustand";
import type { Store } from "../data/flow-types";

/**
 * Zustand Store für die Verwaltung des aktuellen Diagramm-IDs.
 * Dieser Store ermöglicht es, die ID des aktuell angezeigten Diagramms zu setzen und abzurufen.
 * Er wird in der gesamten Anwendung verwendet, um den Zustand des Diagramms zu verfolgen.
 */
const useDiagramStore = create<Store>((set) => ({
  diagramId: "root",
  setDiagramId: (id) => set({ diagramId: id }),
  tableData: null,
  setTableData: (data) => set({ tableData: data }),
  tableTitle: null,
  setTableTitle: (title) => set({ tableTitle: title }),
}));

export default useDiagramStore;
