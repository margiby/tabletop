import { memo } from 'react';
import type { ReactElement } from 'react';
import { Handle, Position } from '@xyflow/react';
import type { CustomNodeProps } from '../flow-types';

 // Handle-Konfiguration
const HANDLE_CONFIG = {
  TARGET: {
    type: 'target' as const,
    position: Position.Bottom,
    className: 'custom-handle',
  },
  SOURCE: {
    type: 'source' as const,
    position: Position.Top,
    className: 'custom-handle',
  },
} as const;

/**
 * CustomNode ist ein benutzerdefinierter Knoten für das Diagramm.
 * Er zeigt ein Icon und eine Beschriftung an und hat Eingangs- und Ausgangs-Handles
 */
const CustomNode = memo(({ data }: CustomNodeProps): ReactElement => {
  return (
    <>
      <Handle {...HANDLE_CONFIG.TARGET} />
      <div className="custom-node-content">
        {data.icon}
        <span>{data.label}</span>
      </div>
      <Handle {...HANDLE_CONFIG.SOURCE} />
    </>
  );
});

export default CustomNode;