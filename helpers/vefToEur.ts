import { VEF_TO_EUR_CONVERSION_RATE } from '../constants';

export default function vefToEur(vef: number): string {
  const converted = vef / VEF_TO_EUR_CONVERSION_RATE;
  return converted.toFixed(2);
}
