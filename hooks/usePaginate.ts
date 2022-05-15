import { useMemo, useState } from 'react';

import range from '../utils/range';

interface UsePaginateOptions<T> {
  items: T[];
  itemsPerPage?: number;
  siblingCount?: number;
}

export const DOTS = '...';

export default function usePaginate<T>({
  items,
  itemsPerPage = 10,
  siblingCount = 1,
}: UsePaginateOptions<T>) {
  const [page, setPage] = useState(1);
  const totalCount = items.length;
  const pageAmount = Math.ceil(items.length / itemsPerPage);

  const currentItems = useMemo(() => {
    const newItems = [...items];
    const start = (page - 1) * itemsPerPage;
    const end = page * itemsPerPage;
    return newItems.slice(start, end);
  }, [page, items, itemsPerPage, pageAmount]);

  const paginationRange = useMemo(() => {
    // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
    const totalPageNumbers = siblingCount + 5;

    /*
      Case 1:
      If the number of pages is less than the page numbers we want to show in our
      paginationComponent, we return the range [1..totalPageCount]
    */
    if (totalPageNumbers >= pageAmount) {
      return range(1, pageAmount);
    }

    /*
    	Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
    */
    const leftSiblingIndex = Math.max(page - siblingCount, 1);
    const rightSiblingIndex = Math.min(page + siblingCount, pageAmount);

    /*
      We do not show dots just when there is just one page number to be inserted between the extremes of sibling and the page limits i.e 1 and totalPageCount. Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
    */
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < pageAmount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = pageAmount;

    /*
    	Case 2: No left dots to show, but rights dots to be shown
    */
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, pageAmount] as const;
    }

    /*
    	Case 3: No right dots to show, but left dots to be shown
    */
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(pageAmount - rightItemCount + 1, pageAmount);
      return [firstPageIndex, DOTS, ...rightRange];
    }

    /*
    	Case 4: Both left and right dots to be shown
    */
    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }

    return [firstPageIndex];
  }, [totalCount, itemsPerPage, siblingCount, page]);

  const onNextPage = () => {
    if (page < pageAmount) {
      setPage(page + 1);
    }
  };

  const onPreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const onPageChange = (pageNumber: number) => {
    setPage(pageNumber);
  };

  return {
    DOTS,
    currentItems,
    onNextPage,
    onPageChange,
    onPreviousPage,
    page,
    pageAmount,
    paginationRange,
  };
}
