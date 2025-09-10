import type { ReactElement } from "react";
import type { TooltipProps } from "../data/flow-types";

/**
 * Tooltip-Komponente für die Anzeige von Node-Beschreibungen
 * Zeigt ein Tooltip an der angegebenen Position mit dem gegebenen Inhalt
 */
const DiagramTooltip = ({
  visible,
  x,
  y,
  content,
}: TooltipProps): ReactElement | null => {
  if (!visible || !content.trim()) {
    return null;
  }

  return (
    <div
      className="diagram-tooltip"
      style={{
        left: x,
        top: y,
      }}
    >
      {content}
    </div>
  );
};

export default DiagramTooltip;
