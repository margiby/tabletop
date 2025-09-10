import type { Node, XYPosition } from '@xyflow/react';
import type { EdgeParams, NodeDimensions } from '../data/flow-types';

/**
 * Funktion, um die Dimensionen eines Nodes zu extrahieren.
 */
function getNodeDimensions(node: Node): NodeDimensions {
  const width = node.width || Number(node.style?.width) || 150;
  const height = node.height || Number(node.style?.height) || 60;
  return { width, height };
}

/**
 * Berechnet den Schnittpunkt zwischen zwei Knoten für eine Floating Edge.
 * Mehr darüber: https://reactflow.dev/examples/edges/floating-edges
 * // https://math.stackexchange.com/questions/1724792/an-algorithm-for-finding-the-intersection-point-between-a-center-of-a-rectangle
 * @param intersectionNode  Der Knoten, für den der Schnittpunkt berechnet wird.
 * @param targetNode        Der Knoten, auf den die Kante zeigt.
 * @returns {XYPosition}    Die berechnete Schnittpunkt-Position.
 */
export function getNodeIntersection(intersectionNode: Node, targetNode: Node): XYPosition {
  const { position: intersectionNodePosition } = intersectionNode;
  const targetPosition = targetNode.position;

  // Fallback-Werte basierend auf tatsächlichen Node-Dimensionen
  const { width: nodeWidth, height: nodeHeight } = getNodeDimensions(intersectionNode);
  const { width: targetWidth, height: targetHeight } = getNodeDimensions(targetNode);

  const w = nodeWidth / 2;
  const h = nodeHeight / 2;

  // Node-Center-Positionen
  const x2 = intersectionNodePosition.x + w;
  const y2 = intersectionNodePosition.y + h;
  const x1 = targetPosition.x + targetWidth / 2;
  const y1 = targetPosition.y + targetHeight / 2;

  // Spezielle Behandlung für sehr nahe oder überlappende Knoten
  const distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  if (distance < Math.max(w, h, targetWidth / 2, targetHeight / 2)) {
    // Wenn Knoten sehr nah sind, verwende eine kleine Offset-Berechnung
    const angle = Math.atan2(y1 - y2, x1 - x2);
    return {
      x: x2 + Math.cos(angle) * w * 0.8,
      y: y2 + Math.sin(angle) * h * 0.8
    };
  }

  // Standard Intersection-Berechnung
  const xx1 = (x1 - x2) / (2 * w) - (y1 - y2) / (2 * h);
  const yy1 = (x1 - x2) / (2 * w) + (y1 - y2) / (2 * h);
  
  // Verhindere Division durch Null
  const denominator = Math.abs(xx1) + Math.abs(yy1);
  if (denominator === 0) {
    return { x: x2, y: y2 }; // Fallback auf Node-Center
  }
  
  const a = 1 / denominator;
  const xx3 = a * xx1;
  const yy3 = a * yy1;
  const x = w * (xx3 + yy3) + x2;
  const y = h * (-xx3 + yy3) + y2;

  return { x, y };
}

/**
 * Berechnet die Parameter für eine Edge zwischen zwei Knoten.
 * @param source Der Quell-Knoten
 * @param target Der Ziel-Knoten
 * @returns Die berechneten Edge-Parameter (Koordinaten)
 */
export function getEdgeParams(source: Node, target: Node): EdgeParams {
  const sourceIntersectionPoint = getNodeIntersection(source, target);
  const targetIntersectionPoint = getNodeIntersection(target, source);

  return {
    sx: sourceIntersectionPoint.x,
    sy: sourceIntersectionPoint.y,
    tx: targetIntersectionPoint.x,
    ty: targetIntersectionPoint.y,
  };
}
