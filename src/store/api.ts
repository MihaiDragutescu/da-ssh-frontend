import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProductType } from '@Types/product';
import { CollectionType, FilterType, CategoryType } from '@Types/filter';
import { paginateNumber } from '@Utils/constants';

export const sshApi = createApi({
  reducerPath: 'sshApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),

  endpoints: (builder) => {
    return {
      getAllProducts: builder.query<ProductType[], void>({
        query: () => '/products',
      }),
      getProducts: builder.query<
        { products: ProductType[]; totalCount: number },
        number
      >({
        query: (page = 1) =>
          `/products?_page=${page}&_limit=${paginateNumber}&_sort=price`,
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
          if (
            !currentCache.products.find(
              (product) => product.id === newData.products[0].id
            )
          ) {
            currentCache.products.push(...newData.products);
          }
        },
        forceRefetch({ currentArg, previousArg }) {
          return currentArg !== previousArg;
        },
      }),
      getFeaturedProducts: builder.query<ProductType[], void>({
        query: () => '/products?featured=true',
      }),
      getRelatedProducts: builder.query<ProductType[], string>({
        query: (category) => `/products?category=${category}`,
      }),
      getProduct: builder.query<ProductType, string>({
        query: (id) => `/products/${id}`,
      }),
      getFeaturedCollections: builder.query<CollectionType[], void>({
        query: () => '/collections?featured=true&_embed=categories',
      }),
      getFilters: builder.query<FilterType[], void>({
        query: () => '/filters',
      }),
      getCollections: builder.query<CollectionType[], void>({
        query: () => '/collections',
      }),
      getCategories: builder.query<CategoryType[], void>({
        query: () => '/categories',
      }),
    };
  },
});

export const {
  useGetAllProductsQuery,
  useGetProductsQuery,
  useGetFeaturedProductsQuery,
  useGetRelatedProductsQuery,
  useGetProductQuery,
  useGetFeaturedCollectionsQuery,
  useGetFiltersQuery,
  useGetCollectionsQuery,
  useGetCategoriesQuery,
} = sshApi;
