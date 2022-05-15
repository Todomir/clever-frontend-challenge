import { FallbackProps } from 'react-error-boundary';

import styles from './style.module.css';

export function ErrorFallback({ error }: FallbackProps) {
  return (
    <div className={styles.error}>
      <h2>An error occurred 💣</h2>
      <code>
        <pre>{error.message}</pre>
      </code>
    </div>
  );
}
