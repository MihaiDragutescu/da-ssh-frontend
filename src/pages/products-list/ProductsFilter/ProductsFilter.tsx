import ColorsList from '@Components/ui/ColorsList';
import FilterItemsList from '@Components/ui/FilterItemsList';
import PriceSlider from '../PriceRangeSlider/PriceRangeSlider';
import { FiltersListType } from '@App/types/filtersList';
import { useState, useEffect, useMemo } from 'react';
import debouce from 'lodash.debounce';
import _ from 'lodash';
import Button from '@Components/ui/Button';
import {
  useGetFiltersQuery,
  useGetCollectionsQuery,
  useGetCategoriesQuery,
} from '@Store/index';
import './ProductsFilter.scss';

interface ProductsFilterProps {
  visible: boolean;
  handleNoFilters: (value: boolean) => void;
}

const ProductsFilter: React.FC<ProductsFilterProps> = (
  props: ProductsFilterProps
) => {
  const [activeFilters, setActiveFilters] = useState<FiltersListType>({});
  const filtersData = useGetFiltersQuery();
  const noFiltersState = {
    size: [],
    brand: [],
    color: [],
    minPrice: 100,
    maxPrice: 9900,
    collection: [],
    category: [],
  };

  const checkNoFiltersState = () => {
    props.handleNoFilters(_.isEqual(activeFilters, noFiltersState));
  };

  const handleFilterClick = (filter: keyof FiltersListType, value: string) => {
    setActiveFilters((prev) => {
      return {
        ...prev,
        [filter]: Array.isArray(prev[filter])
          ? (prev[filter] as string[]).includes(value)
            ? (prev[filter] as string[]).filter((elem) => elem !== value)
            : [...(prev[filter] as string[]), value]
          : value,
      };
    });
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
    setActiveFilters(noFiltersState);
  };

  useEffect(() => {
    resetFilters();

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
    setActiveFilters((prev) => {
      return { ...prev, minPrice: min, maxPrice: max };
    });
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
