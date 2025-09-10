import {
  useCallback,
  useMemo,
} from 'react';
import type { ReactElement } from 'react';
import {
  useStore,
  getSimpleBezierPath,
  EdgeLabelRenderer,
  BaseEdge,
  type EdgeProps,
} from '@xyflow/react';
import { getEdgeParams } from '../../utils/floatingEdgeUtils';
import type { EdgeParams } from '../flow-types';

/**
 * Floating Edge Komponente für dynamische Verbindungen zwischen Knoten
 */

export default function FloatingEdge({
  id,
  source,
  target,
  markerEnd,
  markerStart,
  style,
  animated,
  // Props to filter out to avoid React warnings
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  sourceHandleId,
  targetHandleId,
  selectable,
  deletable,
  pathOptions,
  ...rest
}: EdgeProps): ReactElement | null {
  // Abrufen der Quell- und Zielknoten aus dem Store
  const sourceNode = useStore(
    useCallback((store) => store.nodeLookup.get(source), [source]),
  );
  const targetNode = useStore(
    useCallback((store) => store.nodeLookup.get(target), [target]),
  );

  // Kante nicht rendern, wenn ein Knoten fehlt
  if (!sourceNode || !targetNode) {
    return null;
  }

  // Berechnung der Endpunkte für die floating Edge
  const { sx, sy, tx, ty }: EdgeParams = getEdgeParams(sourceNode, targetNode);

  // Erstelle Bezier-Pfad für sanfte Kantenverläufe
  const [edgePath] = useMemo(() => {
    // Verwende Bezier-Kurven für sanftere Kanten
    return getSimpleBezierPath({
      sourceX: sx,
      sourceY: sy,
      targetX: tx,
      targetY: ty,
    });
  }, [sx, sy, tx, ty]);

  return (
    <>
      {/* Hauptkomponente der Kante */}
      <BaseEdge
        id={id}
        path={edgePath}
        markerEnd={markerEnd}
        markerStart={markerStart}
        style={style}
        {...rest}
      />
      {/* Renderer für Kanten-Labels */}
      <EdgeLabelRenderer>
        {rest.label && typeof rest.label === 'string' && (
          <div>
            {rest.label}
          </div>
        )}
      </EdgeLabelRenderer>
    </>
  );
}