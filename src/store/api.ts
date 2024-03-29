import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProductType } from '@Types/product';
import { CollectionType, FilterType, CategoryType } from '@Types/filter';
import { FiltersListType } from '@Types/filtersList';
import { paginateNumber } from '@Utils/constants';
import { sortTypes } from '@Types/sortTypes';
import { isStringArray } from '@Utils/isTypeGuards';

export const sshApi = createApi({
  reducerPath: 'sshApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL || 'http://localhost:3001',
  }),
  endpoints: (builder) => {
    return {
      getAllProducts: builder.query<ProductType[], void>({
        query: () => '/products',
      }),
      getFeaturedProducts: builder.query<ProductType[], void>({
        query: () => '/products?featured=true',
      }),
      getRelatedProducts: builder.query<ProductType[], string>({
        query: (category) => `/products?category=${category}`,
      }),
      getFilteredProducts: builder.query<
        { products: ProductType[]; totalCount: number },
        { page: number; filtersList: FiltersListType }
      >({
        query: ({ page = 1, filtersList }) => {
          let queryParams = '?';
          for (const [key, value] of Object.entries(filtersList)) {
            if (key === 'minPrice') {
              queryParams += `price_gte=${value}&`;
            } else if (key === 'maxPrice') {
              queryParams += `price_lte=${value}&`;
            } else if (
              ['size', 'brand', 'color', 'collection', 'category'].includes(key)
            ) {
              if (isStringArray(value)) {
                const params = value
                  .map((val: string) => `${key}_like=${val}&`)
                  .join('');
                queryParams += params;
              }
            }
          }
          queryParams = queryParams.slice(0, -1);

          let sortParam = '';
          if (filtersList.sort === sortTypes.PRICE_HIGH_TO_LOW) {
            sortParam = '&_sort=price&_order=desc';
          } else if (filtersList.sort === sortTypes.PRICE_LOW_TO_HIGH) {
            sortParam = '&_sort=price';
          }

          return `/products${queryParams}&_page=${page}&_limit=${paginateNumber}${sortParam}`;
        },
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

          currentCache.totalCount = newData.totalCount;
        },
        forceRefetch({ currentArg, previousArg }) {
          return currentArg !== previousArg;
        },
      }),
      getCartProducts: builder.query<ProductType[], { productIds: string[] }>({
        query: ({ productIds }) => {
          const queryParams = productIds
            .reduce((acc, id) => acc + `id=${id}&`, '?')
            .slice(0, -1);
          return `/products${queryParams}`;
        },
        transformResponse: (apiResponse: ProductType[], meta, arg) => {
          return !arg.productIds.length ? [] : apiResponse;
        },
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
  useGetFeaturedProductsQuery,
  useGetRelatedProductsQuery,
  useGetFilteredProductsQuery,
  useGetCartProductsQuery,
  useGetProductQuery,
  useGetFeaturedCollectionsQuery,
  useGetFiltersQuery,
  useGetCollectionsQuery,
  useGetCategoriesQuery,
} = sshApi;
