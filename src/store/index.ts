import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { sshApi } from './api';

export const store = configureStore({
  reducer: {
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
  useGetProductQuery,
  useGetFeaturedCollectionsQuery,
  useGetFiltersQuery,
  useGetCollectionsQuery,
  useGetCategoriesQuery,
} from './api';
