import { RootState } from '@Store/index';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { initialFiltersState, priceRangeValues } from '@Utils/constants';

const useSetQueryParams = (route: string) => {
  const activeFilters = useSelector((state: RootState) => state.filters);

  if (_.isEqual(activeFilters, initialFiltersState)) {
    return { route };
  }

  return {
    route: Object.entries(activeFilters)
      .reduce((acc, [key, value]) => {
        if (typeof value !== 'object') {
          if (
            ((key === 'minPrice' || key === 'maxPrice') &&
              value !== priceRangeValues[key]) ||
            typeof value === 'string'
          ) {
            return acc + `${key}=${value}&`;
          }
        } else {
          if (Array.isArray(value) && value.length > 0) {
            return value.reduce(
              (finalAcc, filterValue) =>
                finalAcc + `${key}=${encodeURIComponent(filterValue)}&`,
              acc
            );
          }
        }
        return acc;
      }, route + '?')
      .slice(0, -1),
  };
};

export default useSetQueryParams;
