import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { sshApi } from './api';
import filtersReducer from './slices/filtersSlice';
import currentPageReducer from './slices/currentPageSlice';
import cartReducer from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    pages: currentPageReducer,
    filters: filtersReducer,
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
  useGetCartProductsQuery,
  useGetProductQuery,
  useGetFeaturedCollectionsQuery,
  useGetFiltersQuery,
  useGetCollectionsQuery,
  useGetCategoriesQuery,
} from './api';

export { updateCurrentPage, resetCurrentPage } from './slices/currentPageSlice';

export {
  updateActiveFilters,
  updatePriceRange,
  resetActiveFilters,
} from './slices/filtersSlice';

export {
  addToCart,
  updateCartItemQuantity,
  removeFromCart,
  clearCart,
} from './slices/cartSlice';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
