import ColorsList from '@Components/ui/ColorsList';
import FilterItemsList from '@Components/ui/FilterItemsList';
import PriceSlider from '../PriceRangeSlider/PriceRangeSlider';
import { FiltersListType } from '@Types/filtersList';
import { initialFiltersState, priceRangeValues } from '@Utils/constants';
import { useEffect, useMemo, useState } from 'react';
import debouce from 'lodash.debounce';
import _ from 'lodash';
import Button from '@Components/ui/Button';
import {
  useGetFilteredProductsQuery,
  useGetFiltersQuery,
  useGetCollectionsQuery,
  useGetCategoriesQuery,
  resetCurrentPage,
  updateActiveFilters,
  updatePriceRange,
  resetActiveFilters,
} from '@Store/index';
import type { RootState, AppDispatch } from '@Store/index';
import { useSelector, useDispatch } from 'react-redux';
import { useQueryParams } from 'use-query-params';
import { priceRange } from '@Types/priceRange';
import { parseFiltersObject } from '@Utils/parseFiltersObject';
import useResetCachedProducts from '@Hooks/useResetCachedProducts';
import './ProductsFilter.scss';
import { RouterPaths } from '@Types/routerPaths';

interface ProductsFilterProps {
  visible: boolean;
  handleNoFilters: (value: boolean) => void;
}

const ProductsFilter: React.FC<ProductsFilterProps> = (
  props: ProductsFilterProps
) => {
  const dispatch = useDispatch<AppDispatch>();
  const filtersData = useGetFiltersQuery();
  const activeFilters = useSelector((state: RootState) => state.filters);
  const { refetch } = useGetFilteredProductsQuery({
    page: 1,
    filtersList: activeFilters,
  });
  const { resetCache } = useResetCachedProducts();
  const [filterSelected, setFilterSelected] = useState<keyof FiltersListType>();
  const [filterValue, setFilterValue] = useState<string | number>();
  const noFiltersState = { ...initialFiltersState };
  const paramKeysObj = parseFiltersObject(initialFiltersState);
  const [queryParams, setQueryParams] = useQueryParams(paramKeysObj);

  const checkNoFiltersState = () => {
    props.handleNoFilters(
      _.isEqual(
        _.omit(activeFilters, ['sort']),
        _.omit(noFiltersState, ['sort'])
      )
    );
  };

  const resetCachedProducts = async () => {
    await resetCache();
    refetch();
  };

  const handleFilterClick = (filter: keyof FiltersListType, value: string) => {
    dispatch(resetCurrentPage());
    dispatch(updateActiveFilters({ filter, value }));
    setFilterSelected(filter);
    setFilterValue(value);
    resetCachedProducts();
  };

  const sizes = filtersData.data
    ?.filter((size) => size.type === 'size')
    .map((size) => size.name);
  const sizesList = (
    <FilterItemsList
      list={sizes}
      type='size'
      activeFilter={activeFilters.size}
      handleClick={handleFilterClick}
    />
  );

  const brands = filtersData.data
    ?.filter((brand) => brand.type === 'brand')
    .map((brand) => brand.name);
  const brandsList = (
    <FilterItemsList
      list={brands}
      type='brand'
      activeFilter={activeFilters.brand}
      handleClick={handleFilterClick}
    />
  );

  const colors = filtersData.data
    ?.filter((color) => color.type === 'color')
    .map((color) => color.name);
  const colorsList = (
    <ColorsList
      colors={colors}
      activeColor={activeFilters.color}
      handleClick={handleFilterClick}
    />
  );

  const collections = useGetCollectionsQuery().data?.map(
    (collection) => collection.name
  );
  const collectionsList = (
    <FilterItemsList
      list={collections}
      type='collection'
      activeFilter={activeFilters.collection}
      handleClick={handleFilterClick}
    />
  );

  const categories = useGetCategoriesQuery().data?.map(
    (category) => category.name
  );
  const categoriesList = (
    <FilterItemsList
      list={categories}
      type='category'
      activeFilter={activeFilters.category}
      handleClick={handleFilterClick}
    />
  );

  const handlePriceChange = (
    min: number,
    max: number,
    priceChanged: priceRange
  ) => {
    dispatch(resetCurrentPage());
    dispatch(updatePriceRange({ min, max }));

    if (priceChanged === priceRange.MIN_PRICE) {
      setFilterSelected('minPrice');
      setFilterValue(min);
    } else if (priceChanged === priceRange.MAX_PRICE) {
      setFilterSelected('maxPrice');
      setFilterValue(max);
    }

    resetCachedProducts();
  };

  const debouncePriceChange = useMemo(() => {
    return debouce(handlePriceChange, 300);
  }, []);

  const resetFilters = () => {
    props.handleNoFilters(true);
    dispatch(resetCurrentPage());
    dispatch(resetActiveFilters());
    window.history.pushState({}, document.title, RouterPaths.SHOP);
    resetCachedProducts();
  };

  useEffect(() => {
    if (filterSelected !== undefined) {
      if (filterSelected === 'minPrice' || filterSelected === 'maxPrice') {
        filterValue === priceRangeValues[filterSelected]
          ? setQueryParams({ [filterSelected]: undefined })
          : setQueryParams({ [filterSelected]: filterValue });
      } else {
        setQueryParams({
          [filterSelected]: activeFilters[filterSelected],
        });
      }
    }
  }, [activeFilters, filterValue]);

  useEffect(() => {
    const focusedButton = document.querySelector(
      '.products-filters  .ssh-filter-pill button'
    ) as HTMLElement;
    focusedButton && focusedButton.focus();
  }, [props.visible]);

  useEffect(() => {
    checkNoFiltersState();
    return () => {
      debouncePriceChange.cancel();
    };
  });

  return (
    <div className={`products-filters ${!props.visible ? 'hidden' : ''}`}>
      <div className='products-filters__size products-filters__col'>
        <div className='products-filters__title'>Size</div>
        <ul className='products-filters__list'>{sizesList}</ul>
      </div>
      <div className='products-filters__col'>
        <div className='products-filters__title'>Brand</div>
        <ul className='products-filters__brand products-filters__list'>
          {brandsList}
        </ul>
      </div>
      <div className='products-filters__col products-filters__color'>
        <div className='products-filters__title'>COLOUR</div>
        <ul className='products-filters__list'>{colorsList}</ul>
      </div>
      <div className='products-filters__col products-filters__price'>
        <div className='products-filters__title'>Price</div>
        <PriceSlider
          minPrice={activeFilters.minPrice ?? priceRangeValues.minPrice}
          maxPrice={activeFilters.maxPrice ?? priceRangeValues.maxPrice}
          handlePriceChange={debouncePriceChange}
        />
      </div>
      <div className='products-filters__col products-filters__collection'>
        <div className='products-filters__title'>Collection</div>
        <ul className='products-filters__list'>{collectionsList}</ul>
      </div>
      <div className='products-filters__col products-filters__category'>
        <div className='products-filters__title'>Category</div>
        <ul className='products-filters__list'>{categoriesList}</ul>
      </div>
      <div className='products-filters__col products-filters__reset'>
        <Button onClick={resetFilters}>Reset filters</Button>
      </div>
    </div>
  );
};

export default ProductsFilter;
