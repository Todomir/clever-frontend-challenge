import { CSSProperties } from 'react';

import styles from './style.module.css';

export interface SkeletonProps {
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
  aspectRatio?: string;
}

export default function Skeleton({
  width = 20,
  height = 20,
  borderRadius = 4,
  aspectRatio = 'inherit',
}: SkeletonProps) {
  const formattedWidth = typeof width === 'number' ? `${width}px` : width;
  const formattedHeight = typeof height === 'number' ? `${height}px` : height;
  const formattedBorderRadius =
    typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius;

  const variables = {
    '--props-aspect-ratio': aspectRatio,
    '--props-border-radius': formattedBorderRadius,
    '--props-height': formattedHeight,
    '--props-width': formattedWidth,
  } as CSSProperties;

  return <div className={styles.skeleton} style={variables} />;
}
