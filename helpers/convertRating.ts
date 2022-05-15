import { OverallRating } from '../model/property.model';

export default function convertRating(rating: OverallRating | null): string {
  if (!rating) return '0.0';

  const CONVERSION_RATE = 10;
  const starRating = Number(rating.overall) / CONVERSION_RATE;
  return starRating.toFixed(1);
}
