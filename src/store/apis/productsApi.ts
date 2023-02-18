import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProductType } from '@Types/product';

export const productsApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),

  tagTypes: ['Product'],
  endpoints: (builder) => {
    return {
      getProducts: builder.query<ProductType, number>({
        query: (page = 1) => `/products?_page=${page}&_limit=9`,
      }),
      getFeaturedProducts: builder.query<ProductType[], void>({
        query: () => '/products?featured=true',
      }),
    };
  },
});

export const { useGetProductsQuery, useGetFeaturedProductsQuery } = productsApi;
