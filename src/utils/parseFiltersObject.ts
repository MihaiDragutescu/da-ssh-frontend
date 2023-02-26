import { FiltersListType } from '@Types/filtersList';
import { priceRangeValues } from './constants';
import { NumberParam, ArrayParam, withDefault } from 'use-query-params';

export const parseFiltersObject = (filtersObj: FiltersListType) => {
  const paramsKeys = Object.keys(filtersObj) as Array<keyof FiltersListType>;
  const paramsKeysArray = paramsKeys.map((key: keyof FiltersListType) => {
    return {
      [key]:
        key === 'minPrice'
          ? withDefault(NumberParam, priceRangeValues.minPrice)
          : key === 'maxPrice'
          ? withDefault(NumberParam, priceRangeValues.maxPrice)
          : withDefault(ArrayParam, []),
    };
  });

  const paramKeysObj = {};

  paramsKeysArray.forEach((elem) =>
    Object.assign(paramKeysObj, {
      [Object.keys(elem)[0]]: elem[Object.keys(elem)[0]],
    })
  );

  return paramKeysObj;
};
