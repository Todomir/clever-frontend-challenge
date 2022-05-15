/* eslint-disable unicorn/no-null */
import convertRating from '../../helpers/convertRating';

const rating = {
  numberOfRatings: '200',
  overall: '48',
};

describe('helpers/convertRating', () => {
  it('should convert rating to desired format', () => {
    const result = convertRating(rating);
    expect(result).toBe('4.8');
  });

  it('should return "0.0" if rating is null', () => {
    const result = convertRating(null);
    expect(result).toBe('0.0');
  });
});
