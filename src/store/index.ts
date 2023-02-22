import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { sshApi } from './api';
import filtersReducer from './slices/filtersSlice';

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    [sshApi.reducerPath]: sshApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(sshApi.middleware);
  },
});

setupListeners(store.dispatch);

export {
  useGetAllProductsQuery,
  useGetProductsQuery,
  useGetFeaturedProductsQuery,
  useGetRelatedProductsQuery,
  useGetFilteredProductsQuery,
  useGetProductQuery,
  useGetFeaturedCollectionsQuery,
  useGetFiltersQuery,
  useGetCollectionsQuery,
  useGetCategoriesQuery,
} from './api';

export {
  updateActiveFilters,
  updatePriceRange,
  resetActiveFilters,
} from './slices/filtersSlice';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
