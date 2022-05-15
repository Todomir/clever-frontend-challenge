import data from '../data/properties-2.json';
import convertRating from '../helpers/convertRating';
import convertToEur from '../helpers/convertToEur';
import {
  FilterData,
  Location,
  Pagination,
  Property,
} from '../model/property.model';

export interface Data {
  properties: Property[];
  location: Location;
  filterData: FilterData;
  pagination: Pagination;
}

export default function getProperties(): Data {
  const newProperties = data.properties.map(property => {
    const {
      lowestPricePerNight,
      lowestPrivatePricePerNight,
      lowestDormPricePerNight,
    } = property;

    // Convert prices to EUR
    const newPrices = {
      lowestDormPricePerNight:
        lowestDormPricePerNight && convertToEur(lowestDormPricePerNight),
      lowestPricePerNight: convertToEur(lowestPricePerNight),
      lowestPrivatePricePerNight:
        lowestPrivatePricePerNight && convertToEur(lowestPrivatePricePerNight),
    };

    const { overallRating } = property;
    const newOverallRating = overallRating
      ? {
          numberOfRatings: overallRating.numberOfRatings,
          overall: convertRating(overallRating),
        }
      : // eslint-disable-next-line unicorn/no-null
        null;

    return {
      ...property,
      overallRating: newOverallRating,
      ...newPrices,
    };
  });

  return {
    ...data,
    properties: newProperties,
  };
}
