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
import { sortTypes } from '@Types/sortTypes';
import { ReactComponent as Close } from '@Assets/images/menu-xmark.svg';
import './ProductsSort.scss';

interface ProductsSortProps {
  visible: boolean;
  closeSort: (value: boolean) => void;
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
    activeFilters.sort ?? sortTypes.NEWEST
  );
  const { resetCache } = useResetCachedProducts();
  const paramKeysObj = parseFiltersObject(initialFiltersState);
  const [queryParams, setQueryParams] = useQueryParams(paramKeysObj);
  const sortButton = document.querySelector(
    'button.products-actions__sort'
  ) as HTMLElement;

  const resetCachedProducts = async () => {
    await resetCache();
    refetch();
  };

  const handleClick = (sortType: string) => {
    setActiveSort(sortType);
    dispatch(resetCurrentPage());
    dispatch(updateActiveFilters({ filter: 'sort', value: sortType }));
    resetCachedProducts();
    sortButton.focus();
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
    setActiveSort(activeFilters.sort ?? sortTypes.NEWEST);
    if (activeFilters.sort !== sortTypes.NEWEST) {
      setQueryParams({
        sort: activeFilters.sort,
      });
    } else {
      setQueryParams({
        sort: undefined,
      });
    }
  }, [activeFilters]);

  useEffect(() => {
    const focusedButton = document.querySelector(
      '.products-sort  .ssh-sort-pill button'
    ) as HTMLElement;
    focusedButton && focusedButton.focus();
  }, [props.visible]);

  return (
    <div className={`products-sort ${!props.visible ? 'hidden' : ''}`}>
      <div
        className='products-sort__close'
        onClick={() => props.closeSort(false)}
      >
        <Close />
      </div>
      <div className='products-sort__content'>
        <ul>{sortList}</ul>
      </div>
    </div>
  );
};

export default ProductsSort;
