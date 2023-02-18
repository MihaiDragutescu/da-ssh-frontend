import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProductType } from '@Types/product';
import { FeaturedCollectionType } from '@Types/filter';

export const sshApi = createApi({
  reducerPath: 'sshApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),

  endpoints: (builder) => {
    return {
      getProducts: builder.query<ProductType, number>({
        query: (page = 1) => `/products?_page=${page}&_limit=9`,
      }),
      getFeaturedProducts: builder.query<ProductType[], void>({
        query: () => '/products?featured=true',
      }),
      getFeaturedCollections: builder.query<FeaturedCollectionType[], void>({
        query: () => '/collections?featured=true&_embed=categories',
      }),
    };
  },
});

export const {
  useGetProductsQuery,
  useGetFeaturedProductsQuery,
  useGetFeaturedCollectionsQuery,
} = sshApi;
