import { FiltersListType } from '@Types/filtersList';
import { sortTypes } from '@Types/sortTypes';

export const paginateNumber = 9;

export const priceRangeValues = {
  minPrice: 100,
  maxPrice: 9900,
};

export const initialFiltersState: FiltersListType = {
  size: [],
  brand: [],
  color: [],
  minPrice: priceRangeValues.minPrice,
  maxPrice: priceRangeValues.maxPrice,
  collection: [],
  category: [],
  sort: sortTypes.NEWEST,
};

export const taxPercentage = 0.1;

export const quantityLimits = {
  inferiorLimit: 1,
  superiorLimit: 99,
};

export const BREAKPOINTS = { mobile: 0, tablet: 991, desktop: 1250 };
