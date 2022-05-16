import { describe, expect, it } from 'vitest';

import range from '../../utils/range';

describe('utils/range', () => {
  it('should return an array of numbers', () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4, 5]);
  });
});
