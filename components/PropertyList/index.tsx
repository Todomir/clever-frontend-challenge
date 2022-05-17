import { useId } from 'react';
import { ErrorBoundary, useErrorHandler } from 'react-error-boundary';

import { Data } from '../../api/getProperties';
import useFetch from '../../hooks/useFetch';
import usePaginate from '../../hooks/usePaginate';
import { Property } from '../../model/property.model';
import { ErrorFallback } from '../atoms/ErrorFallback';
import Pagination from '../Pagination';
import PropertyCard, {
  Fallback as PropertyCardFallback,
} from '../PropertyCard';
import styles from './style.module.css';

export default function PropertyList() {
  const { data, error } = useFetch<Data>('/api/properties');

  const properties = usePaginate<Property>({
    items: data?.properties || ([] as Property[]),
    itemsPerPage: 10,
  });

  const handleError = useErrorHandler();
  const id = useId();

  if (error) {
    handleError(error);
  }

  return (
    <div>
      <ul className={styles['property-list']}>
        {!data ? (
          <>
            {Array.from({ length: 10 }).map((_, index) => (
              // Using index as key is safe here because useId() always returns a unique value
              // and the list fallback is only rendered once.
              // eslint-disable-next-line react/no-array-index-key
              <PropertyCardFallback key={`${id}--${index}`} />
            ))}
          </>
        ) : (
          <>
            {properties.currentItems.map(property => (
              <li key={property.id}>
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                  <PropertyCard location={data.location} property={property} />
                </ErrorBoundary>
              </li>
            ))}
          </>
        )}
      </ul>
      <Pagination
        currentPage={properties.page}
        paginationRange={properties.paginationRange}
        onNextPage={properties.onNextPage}
        onPageChange={properties.onPageChange}
        onPreviousPage={properties.onPreviousPage}
      />
    </div>
  );
}
