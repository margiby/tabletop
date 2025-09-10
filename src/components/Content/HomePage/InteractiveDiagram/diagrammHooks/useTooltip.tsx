import { useState, useCallback } from "react";
import type { NodeMouseHandler } from "@xyflow/react";
import type { TooltipState, UseTooltipReturn } from "../data/flow-types";

// Initial Zustand des Tooltips
const initialTooltipState: TooltipState = {
  visible: false,
  x: 0,
  y: 0,
  content: "",
};

/**
 * Custom Hook für Tooltip-Funktionalität in Diagrammen
 * Verwaltet den Zustand und die Event-Handler für Node-Tooltips
 */
const useTooltip = (): UseTooltipReturn => {
  const [tooltip, setTooltip] = useState<TooltipState>(initialTooltipState);

  // Callback für das Verstecken des Tooltips
  const hideTooltip = useCallback(() => {
    setTooltip(initialTooltipState);
  }, []);

  // Event-Handler für Mouse-Enter auf einem Knoten
  const handleNodeMouseEnter: NodeMouseHandler = useCallback((event, node) => {
    const description = node.data?.description;
    if (typeof description === "string" && description.trim()) {
      const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
      setTooltip({
        visible: true,
        x: rect.right + 10,
        y: rect.top,
        content: description,
      });
    }
  }, []);

  // Event-Handler für Mouse-Leave auf einem Knoten
  const handleNodeMouseLeave: NodeMouseHandler = useCallback(() => {
    hideTooltip();
  }, [hideTooltip]);

  return {
    tooltip,
    handleNodeMouseEnter,
    handleNodeMouseLeave,
    hideTooltip,
  };
};

export default useTooltip;