import { act, renderHook } from '@testing-library/react-hooks';
import { describe, expect, it } from 'vitest';

import usePaginate from '../../hooks/usePaginate';

const items = [
  { id: 1, name: 'foo' },
  { id: 2, name: 'bar' },
  { id: 3, name: 'baz' },
  { id: 4, name: 'qux' },
  { id: 5, name: 'quux' },
  { id: 6, name: 'corge' },
  { id: 7, name: 'grault' },
  { id: 8, name: 'garply' },
];

describe('hooks/usePaginate', () => {
  it('should return pagination state', () => {
    const { result } = renderHook(() =>
      usePaginate({ items, itemsPerPage: 2 })
    );
    expect(result.current.currentItems).toEqual([
      { id: 1, name: 'foo' },
      { id: 2, name: 'bar' },
    ]);
    expect(result.current.page).toEqual(1);
    expect(result.current.pageAmount).toEqual(4);
  });

  it('should go to next/previous page', () => {
    const { result } = renderHook(() =>
      usePaginate({ items, itemsPerPage: 2 })
    );
    act(() => {
      result.current.onNextPage();
    });

    expect(result.current.page).toEqual(2);
    expect(result.current.currentItems).toEqual([
      { id: 3, name: 'baz' },
      { id: 4, name: 'qux' },
    ]);

    act(() => {
      result.current.onPreviousPage();
    });

    expect(result.current.currentItems).toEqual([
      { id: 1, name: 'foo' },
      { id: 2, name: 'bar' },
    ]);
    expect(result.current.page).toEqual(1);
  });

  it('should go to specific page', () => {
    const { result } = renderHook(() =>
      usePaginate({ items, itemsPerPage: 2 })
    );
    act(() => {
      result.current.onPageChange(3);
    });

    expect(result.current.page).toEqual(3);
    expect(result.current.currentItems).toEqual([
      { id: 5, name: 'quux' },
      { id: 6, name: 'corge' },
    ]);
  });
});
