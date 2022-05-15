import { describe, it, expect } from 'vitest';

import { VEF_TO_EUR_CONVERSION_RATE } from '../../constants';
import convertToEur from '../../helpers/convertToEur';

describe('helpers/convertToEur', () => {
  it('should convert currency to EUR', () => {
    const price = { currency: 'VEF', value: '100' };
    const value = (100 / VEF_TO_EUR_CONVERSION_RATE).toFixed(2);
    const result = convertToEur(price);

    expect(result.currency).toBe('EUR');
    expect(result.value).toBe(value);
  });

  it('should return the same currency if EUR', () => {
    const price = { currency: 'EUR', value: '100' };
    const result = convertToEur(price);

    expect(result.currency).toBe('EUR');
    expect(result.value).toBe('100');
  });
});
