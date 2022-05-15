import { ErrorBoundary } from 'react-error-boundary';

import { ErrorFallback } from '../components/atoms/ErrorFallback';
import PropertyList from '../components/PropertyList';

export default function Home() {
  return (
    <main className="main">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <PropertyList />
      </ErrorBoundary>
    </main>
  );
}
