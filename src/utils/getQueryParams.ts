import { FiltersListType } from '@Types/filtersList';
import { isStringArray } from './isTypeGuards';

export const getQueryParams = (queryString: string) => {
  return Array.from(new URLSearchParams(queryString).entries()).reduce(
    (acc, [key, value]) => {
      const myKey = key as keyof FiltersListType;
      const myParams = acc[myKey];
      value = decodeURI(value);

      if (!['minPrice', 'maxPrice', 'sort'].includes(myKey)) {
        if (myParams !== undefined) {
          if (isStringArray(myParams)) {
            return { ...acc, [key]: [...myParams, value] };
          }
        } else {
          return { ...acc, [key]: [value] };
        }
      } else {
        return { ...acc, [key]: value };
      }
      return acc;
    },
    {} as FiltersListType
  );
};
