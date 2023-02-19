import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProductType } from '@Types/product';
import { FeaturedCollectionType } from '@Types/filter';
import { paginateNumber } from '@Utils/constants';

export const sshApi = createApi({
  reducerPath: 'sshApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),

  endpoints: (builder) => {
    return {
      getProducts: builder.query<
        { products: ProductType[]; totalCount: number },
        number
      >({
        query: (page = 1) => `/products?_page=${page}&_limit=${paginateNumber}`,
        transformResponse: (apiResponse: ProductType[], meta) => {
          return {
            products: apiResponse,
            totalCount: Number(meta?.response?.headers.get('X-Total-Count')),
          };
        },
        serializeQueryArgs: ({ endpointName }) => {
          return endpointName;
        },
        merge: (currentCache, newData) => {
          currentCache.products.push(...newData.products);
        },
        forceRefetch({ currentArg, previousArg }) {
          return currentArg !== previousArg;
        },
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
