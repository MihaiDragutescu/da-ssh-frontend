import { RootState } from '@Store/index';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { initialFiltersState, priceRangeValues } from '@Utils/constants';

const useSetQueryParams = (route: string) => {
  const activeFilters = useSelector((state: RootState) => state.filters);

  if (_.isEqual(activeFilters, initialFiltersState)) {
    return { route };
  }

  route += '?';
  for (const [key, value] of Object.entries(activeFilters)) {
    if (
      (key === 'minPrice' && value !== priceRangeValues.minPrice) ||
      (key === 'maxPrice' && value !== priceRangeValues.maxPrice) ||
      key === 'sort'
    ) {
      route += `${key}=${value}&`;
    } else {
      if (Array.isArray(value) && value.length > 0) {
        const filterValues = [...(value as string[])];
        filterValues.map((filterValue) => {
          route += `${key}=${encodeURIComponent(filterValue)}&`;
        });
      }
    }
  }

  route = route.slice(0, -1);
  return { route };
};

export default useSetQueryParams;
