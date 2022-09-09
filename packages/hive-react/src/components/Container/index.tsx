import { ContainerSizeValues } from '@alexbjr369/hive-common';
import classNames from 'classnames';
import { ReactNode } from 'react';

interface HvContainerProps {
  size?: ContainerSizeValues;
  children?: ReactNode;
  className?: string;
}

export function HvContainer({ size, children, className }: HvContainerProps) {
  return (
    <div
      className={classNames({
        'hv-container': true,
        [`hv-container_${size}`]: size !== undefined,
        [`${className}`]: className !== undefined,
      })}
    >
      {children}
    </div>
  );
}
