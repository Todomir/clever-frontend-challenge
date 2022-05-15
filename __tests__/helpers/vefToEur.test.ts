import { VEF_TO_EUR_CONVERSION_RATE } from '../../constants';
import vefToEur from '../../helpers/vefToEur';

describe('helpers/vefToEur', () => {
  it('should convert vef to eur', () => {
    const result = vefToEur(1);
    const expected = (1 / VEF_TO_EUR_CONVERSION_RATE).toFixed(2);
    expect(result).toBe(expected);
  });
});
