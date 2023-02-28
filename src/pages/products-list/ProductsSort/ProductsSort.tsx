import FilterPill from '@Components/ui/FilterPill';
import { ProductsListActions } from '@Types/productsListActions';
import { useState, useEffect } from 'react';
import {
  AppDispatch,
  resetCurrentPage,
  RootState,
  updateActiveFilters,
  useGetFiltersQuery,
  useGetFilteredProductsQuery,
} from '@Store/index';
import ResponseMessage from '@Components/ui/ResponseMessage';
import { useDispatch, useSelector } from 'react-redux';
import useResetCachedProducts from '@Hooks/useResetCachedProducts';
import { parseFiltersObject } from '@Utils/parseFiltersObject';
import { useQueryParams } from 'use-query-params';
import { initialFiltersState } from '@Utils/constants';
import './ProductsSort.scss';
import { sortTypes } from '@App/types/sortTypes';

interface ProductsSortProps {
  visible: boolean;
}

const ProductsSort: React.FC<ProductsSortProps> = (
  props: ProductsSortProps
) => {
  const dispatch = useDispatch<AppDispatch>();
  const activeFilters = useSelector((state: RootState) => state.filters);
  const { refetch } = useGetFilteredProductsQuery({
    page: 1,
    filtersList: activeFilters,
  });
  const [activeSort, setActiveSort] = useState<string>(
    activeFilters.sort ?? sortTypes.PRICE_LOW_TO_HIGH
  );
  const { resetCache } = useResetCachedProducts();
  const paramKeysObj = parseFiltersObject(initialFiltersState);
  const [queryParams, setQueryParams] = useQueryParams(paramKeysObj);

  const resetCachedProducts = async () => {
    await resetCache();
    refetch();
  };

  const handleClick = (sortType: string) => {
    setActiveSort(sortType);
    dispatch(resetCurrentPage());
    dispatch(updateActiveFilters({ filter: 'sort', value: sortType }));
    resetCachedProducts();
  };

  const sortItems = useGetFiltersQuery();
  let sortList;

  if (sortItems.data === undefined) {
    sortList = <ResponseMessage>Error fetching sort data.</ResponseMessage>;
  } else {
    sortList = sortItems.data
      .filter((filter) => filter.type === 'sort')
      .map((elem, index) => {
        return (
          <FilterPill
            key={index}
            type={ProductsListActions.SORT}
            handleClick={() => {
              handleClick(elem.name);
            }}
            active={elem.name === activeSort}
          >
            {elem.name}
          </FilterPill>
        );
      });
  }

  useEffect(() => {
    setActiveSort(activeFilters.sort ?? sortTypes.PRICE_LOW_TO_HIGH);
    if (activeFilters.sort !== sortTypes.PRICE_LOW_TO_HIGH) {
      setQueryParams({
        sort: activeFilters.sort,
      });
    } else {
      setQueryParams({
        sort: undefined,
      });
    }
  }, [activeFilters]);

  return (
    <div className={`products-sort ${!props.visible ? 'hidden' : ''}`}>
      <ul>{sortList}</ul>
    </div>
  );
};

export default ProductsSort;
