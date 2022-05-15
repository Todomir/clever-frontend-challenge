export interface OverallRating {
  overall: number | string;
  numberOfRatings: string;
}

export interface District {
  id: string;
  name: string;
}

export interface FreeCancellation {
  label: string;
  description: string;
}

export interface Price {
  value: string;
  currency: string;
}

export interface Distance {
  value: number;
  units: string;
}

export interface Image {
  prefix: string;
  suffix: string;
}

export interface FacilityInfo {
  name: string;
  id: string;
}

export interface Facility {
  name: string;
  id: string;
  facilities: FacilityInfo[];
}

export interface Property {
  id: number;
  hbid: number;
  name: string;
  starRating: number;
  overallRating: OverallRating | null;
  latitude: number;
  longitude: number;
  isFeatured: boolean;
  type: string;
  address1: string;
  address2: string;
  freeCancellationAvailable: boolean;
  freeCancellationAvailableUntil: string;
  district: District | null;
  freeCancellation: FreeCancellation;
  lowestPricePerNight: Price;
  lowestPrivatePricePerNight: Price | null;
  lowestDormPricePerNight: Price | null;
  lowestAveragePricePerNight?: any;
  lowestAverageDormPricePerNight?: any;
  lowestAveragePrivatePricePerNight?: any;
  isNew: boolean;
  overview: string;
  stayRuleViolations: any[];
  isElevate: boolean;
  hostelworldRecommends: boolean;
  distance: Distance;
  position: number;
  hwExtra?: any;
  images: Image[];
  facilities: Facility[];
}

export interface City {
  id: number;
  name: string;
  idCountry: number;
  country: string;
}

export interface Location {
  city: City;
  region?: string | null;
}

export interface FilterData {
  highestPricePerNight: Price;
  lowestPricePerNight: Price;
}

export interface Pagination {
  next: string;
  prev: string;
  numberOfPages: number;
  totalNumberOfItems: number;
}
