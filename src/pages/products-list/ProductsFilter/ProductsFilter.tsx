import ColorsList from '@Components/ui/ColorsList';
import FilterItemsList from '@Components/ui/FilterItemsList';
import PriceSlider from '../PriceRangeSlider/PriceRangeSlider';
import { FiltersListType } from '@Types/filtersList';
import { initialFiltersState } from '@Utils/constants';
import { useEffect, useMemo } from 'react';
import debouce from 'lodash.debounce';
import _ from 'lodash';
import Button from '@Components/ui/Button';
import {
  useGetFilteredProductsQuery,
  useGetFiltersQuery,
  useGetCollectionsQuery,
  useGetCategoriesQuery,
  resetCurrentPage,
} from '@Store/index';
import type { RootState, AppDispatch } from '@Store/index';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateActiveFilters,
  updatePriceRange,
  resetActiveFilters,
} from '@Store/index';
import { sshApi } from '@Store/api';
import './ProductsFilter.scss';

interface ProductsFilterProps {
  visible: boolean;
  handleNoFilters: (value: boolean) => void;
}

const ProductsFilter: React.FC<ProductsFilterProps> = (
  props: ProductsFilterProps
) => {
  const filtersData = useGetFiltersQuery();
  const activeFilters = useSelector((state: RootState) => state.filters);
  const { refetch } = useGetFilteredProductsQuery({
    page: 1,
    filtersList: activeFilters,
  });
  const noFiltersState = initialFiltersState;
  const dispatch = useDispatch<AppDispatch>();

  const checkNoFiltersState = () => {
    props.handleNoFilters(_.isEqual(activeFilters, noFiltersState));
  };

  const resetCachedProducts = async () => {
    await dispatch(
      sshApi.util.updateQueryData(
        'getFilteredProducts',
        { page: 1, filtersList: activeFilters },
        (draftProducts) => {
          draftProducts.products = [];
          draftProducts.totalCount = 0;
        }
      )
    );

    refetch();
  };

  const handleFilterClick = (filter: keyof FiltersListType, value: string) => {
    dispatch(resetCurrentPage());
    dispatch(updateActiveFilters({ filter, value }));
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

  const resetFilters = () => {
    props.handleNoFilters(true);
    dispatch(resetCurrentPage());
    dispatch(resetActiveFilters());
    resetCachedProducts();
  };

  useEffect(() => {
    const lastFilterButton = document.querySelector(
      '.products-filters__category ul li:last-child button'
    ) as HTMLElement;

    const filterButton = document.querySelector(
      'button.products-actions__filters'
    ) as HTMLElement;

    const eventHandler = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        filterButton && filterButton.focus();
      }
    };

    lastFilterButton &&
      lastFilterButton.addEventListener('keydown', eventHandler);

    return () => {
      lastFilterButton &&
        lastFilterButton.removeEventListener('keydown', eventHandler);
    };
  }, []);

  useEffect(() => {
    const focusedButton = document.querySelector(
      '.products-filters  .ssh-filter-pill button'
    ) as HTMLElement;

    focusedButton && focusedButton.focus();
  }, [props.visible]);

  const handlePriceChange = (min: number, max: number) => {
    dispatch(resetCurrentPage());
    dispatch(updatePriceRange({ min, max }));
    resetCachedProducts();
  };

  const debouncePriceChange = useMemo(() => {
    return debouce(handlePriceChange, 300);
  }, []);

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
          minPrice={activeFilters.minPrice ?? 100}
          maxPrice={activeFilters.maxPrice ?? 9900}
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
