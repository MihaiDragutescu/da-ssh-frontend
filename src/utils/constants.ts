import { FiltersListType } from '@Types/filtersList';

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
};
