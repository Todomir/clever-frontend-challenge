/* eslint-disable react/no-array-index-key */
import React, { useId } from 'react';

import { DOTS } from '../../hooks/usePaginate';
import styles from './style.module.css';

export interface PaginationProps {
  onPageChange: (page: number) => void;
  onPreviousPage: () => void;
  onNextPage: () => void;
  paginationRange: readonly [...number[], '...', number] | (string | number)[];
  currentPage: number;
}

interface ArrowProps {
  direction: 'left' | 'right';
}

function Arrow({ direction }: ArrowProps) {
  return (
    <svg
      fill="currentColor"
      style={{ height: '1em', width: '1em' }}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg">
      {direction === 'left' ? (
        <path
          clipRule="evenodd"
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          fillRule="evenodd"
        />
      ) : (
        <path
          clipRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          fillRule="evenodd"
        />
      )}
    </svg>
  );
}

export default function Pagination({
  onPageChange,
  onNextPage,
  onPreviousPage,
  paginationRange,
  currentPage,
}: PaginationProps) {
  const id = useId();

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    // eslint-disable-next-line unicorn/no-null
    return null;
  }

  const lastPage = paginationRange[paginationRange.length - 1];
  const buttonStyle = styles['pagination-list__button'];

  return (
    <nav aria-label="Page navigation">
      <ul className={styles['pagination-list']}>
        <li>
          <button
            aria-label="Previous page"
            className={`${buttonStyle} ${styles['pagination-list__button--arrow']}`}
            onClick={onPreviousPage}>
            <Arrow direction="left" />
          </button>
        </li>
        {paginationRange.map((pageNumber, index) => {
          // If the pageItem is a DOT, render the DOTS unicode character
          if (pageNumber === DOTS) {
            return (
              <li
                key={`pagination-dot-${id}-${index}`}
                aria-hidden
                className={buttonStyle}
                tabIndex={-1}>
                &#8230;
              </li>
            );
          }

          return (
            <li key={`pagination-page-{id}-${index}`}>
              <button
                aria-current={currentPage === pageNumber ? 'page' : undefined}
                className={`${buttonStyle} ${
                  pageNumber === currentPage
                    ? styles['pagination-list__button--active']
                    : ''
                }`}
                onClick={() => onPageChange(pageNumber as number)}>
                {pageNumber}
              </button>
            </li>
          );
        })}
        <li>
          <button
            aria-label="Next page"
            className={`${buttonStyle} ${styles['pagination-list__button--arrow']}`}
            disabled={currentPage === lastPage}
            onClick={onNextPage}>
            <Arrow direction="right" />
          </button>
        </li>
      </ul>
    </nav>
  );
}
