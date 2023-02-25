import { FiltersListType } from '@Types/filtersList';

export const paginateNumber = 9;

export const initialFiltersState: FiltersListType = {
  size: [],
  brand: [],
  color: [],
  minPrice: 100,
  maxPrice: 9900,
  collection: [],
  category: [],
};
