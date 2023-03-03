import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { sshApi } from './api';
import filtersReducer from './slices/filtersSlice';
import currentPageReducer from './slices/currentPageSlice';

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    pages: currentPageReducer,
    [sshApi.reducerPath]: sshApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(sshApi.middleware);
  },
});

setupListeners(store.dispatch);

export {
  useGetAllProductsQuery,
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

export { updateCurrentPage, resetCurrentPage } from './slices/currentPageSlice';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
