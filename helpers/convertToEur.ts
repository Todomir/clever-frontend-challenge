import { Price } from '../model/property.model';
import vefToEur from './vefToEur';

export default function convertToEur(price: Price): Price {
  if (price.currency === 'EUR') return price;
  return {
    currency: 'EUR',
    value: vefToEur(Number(price.value)),
  };
}
