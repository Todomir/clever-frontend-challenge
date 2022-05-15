import { ReactNode } from 'react';

import Skeleton from '../Skeleton';
import styles from './style.module.css';

export interface BadgeProps {
  children: ReactNode;
}

export function Fallback() {
  return <Skeleton height="1.4rem" width="3rem" />;
}

export default function Badge({ children }: BadgeProps) {
  return <span className={styles.badge}>{children}</span>;
}
