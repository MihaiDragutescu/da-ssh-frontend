import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { FiltersListType } from '@Types/filtersList';
import { initialFiltersState } from '@Utils/constants';
import { getQueryParams } from '@Utils/getQueryParams';

const initialState: FiltersListType = { ...initialFiltersState };
const queryParams = getQueryParams(window.location.search);

for (const [key, value] of Object.entries(queryParams)) {
  const myKey = key as keyof FiltersListType;
  if (!['minPrice', 'maxPrice', 'sort'].includes(myKey)) {
    (initialState[myKey] as string[]) = value as string[];
  } else {
    (initialState[myKey] as string) = value as string;
  }
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    updateActiveFilters: (
      state,
      action: PayloadAction<{ filter: keyof FiltersListType; value: string }>
    ) => {
      return {
        ...state,
        [action.payload.filter]: Array.isArray(state[action.payload.filter])
          ? (state[action.payload.filter] as string[]).includes(
              action.payload.value
            )
            ? (state[action.payload.filter] as string[]).filter(
                (elem) => elem !== action.payload.value
              )
            : [
                ...(state[action.payload.filter] as string[]),
                action.payload.value,
              ]
          : action.payload.value,
      };
    },
    updatePriceRange: (
      state,
      action: PayloadAction<{ min: number; max: number }>
    ) => {
      return {
        ...state,
        minPrice: action.payload.min,
        maxPrice: action.payload.max,
      };
    },
    resetActiveFilters: () => {
      return {
        ...initialFiltersState,
      };
    },
  },
});

export const { updateActiveFilters, updatePriceRange, resetActiveFilters } =
  filtersSlice.actions;
export default filtersSlice.reducer;
