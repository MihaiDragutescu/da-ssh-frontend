import { FiltersListType } from '@Types/filtersList';

export const getQueryParams = (queryString: string) => {
  const params: FiltersListType = {};

  new URLSearchParams(queryString).forEach(function (val, key) {
    const myKey = key as keyof FiltersListType;
    if (
      params[myKey] !== undefined &&
      myKey !== 'minPrice' &&
      myKey !== 'maxPrice'
    ) {
      if (!Array.isArray(params[myKey])) {
        (params[myKey] as string[]) = [val];
      }
      (params[myKey] as string[]).push(val);
    } else if (
      params[myKey] === undefined &&
      myKey !== 'minPrice' &&
      myKey !== 'maxPrice'
    ) {
      (params[myKey] as string[]) = [val];
    } else {
      (params[myKey] as string) = val;
    }
  });

  return params;
};
