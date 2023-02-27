import { FiltersListType } from '@Types/filtersList';

export const getQueryParams = (queryString: string) => {
  const params: FiltersListType = {};

  new URLSearchParams(queryString).forEach(function (value, key) {
    const myKey = key as keyof FiltersListType;
    value = decodeURI(value);
    if (
      params[myKey] !== undefined &&
      myKey !== 'minPrice' &&
      myKey !== 'maxPrice'
    ) {
      if (!Array.isArray(params[myKey])) {
        (params[myKey] as string[]) = [value];
      }
      (params[myKey] as string[]).push(value);
    } else if (
      params[myKey] === undefined &&
      myKey !== 'minPrice' &&
      myKey !== 'maxPrice'
    ) {
      (params[myKey] as string[]) = [value];
    } else {
      (params[myKey] as string) = value;
    }
  });

  return params;
};
