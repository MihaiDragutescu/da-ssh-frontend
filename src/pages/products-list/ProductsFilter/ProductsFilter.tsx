import ColorsList from '@Components/ui/ColorsList';
import FilterItemsList from '@Components/ui/FilterItemsList';
import PriceSlider from '../PriceRangeSlider/PriceRangeSlider';
import { FilterType } from '@Types/filter';
import { useState, useEffect } from 'react';
import { sizes, brands, collections, categories } from '@Utils/mocks';
import './ProductsFilter.scss';

interface ProductsFilterProps {
  visible: boolean;
}

const ProductsFilter: React.FC<ProductsFilterProps> = (
  props: ProductsFilterProps
) => {
  const [activeFilters, setActiveFilters] = useState<FilterType>({});

  const handleClick = (filter: keyof FilterType, value: string | number) => {
    setActiveFilters((prev) => {
      return {
        ...prev,
        [filter]: value,
      };
    });
  };

  const sizesList = (
    <FilterItemsList
      list={sizes}
      type='size'
      activeFilter={activeFilters.size}
      handleClick={handleClick}
    />
  );

  const brandsList = (
    <FilterItemsList
      list={brands}
      type='brand'
      activeFilter={activeFilters.brand}
      handleClick={handleClick}
    />
  );

  const colorsList = (
    <ColorsList activeColor={activeFilters.color} handleClick={handleClick} />
  );

  const collectionsList = (
    <FilterItemsList
      list={collections}
      type='collection'
      activeFilter={activeFilters.collection}
      handleClick={handleClick}
    />
  );

  const categoriesList = (
    <FilterItemsList
      list={categories}
      type='category'
      activeFilter={activeFilters.category}
      handleClick={handleClick}
    />
  );

  useEffect(() => {
    setActiveFilters({
      size: '3',
      brand: '3',
      color: '6',
      minPrice: 1000,
      maxPrice: 10000,
      collection: '3',
      category: '3',
    });

    const lastFilterButton = document.querySelector(
      '.products-filters__category ul li:last-child button'
    )! as HTMLElement;

    const filterButton = document.querySelector(
      'button.products-actions__filters'
    )! as HTMLElement;

    const eventHnadler = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        filterButton.focus();
      }
    };

    lastFilterButton.addEventListener('keydown', eventHnadler);

    return () => {
      lastFilterButton.removeEventListener('keydown', eventHnadler);
    };
  }, []);

  useEffect(() => {
    const focusedButton = document.querySelector(
      '.products-filters  .ssh-filter-pill button'
    )! as HTMLElement;
    focusedButton.focus();
  }, [props.visible]);

  const handlePriceChange = (min: number, max: number) => {
    setActiveFilters((prev) => {
      return {
        ...prev,
        minPrice: min,
        maxPrice: max,
      };
    });
  };

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
        <PriceSlider handlePriceChange={handlePriceChange} />
      </div>
      <div className='products-filters__col products-filters__collection'>
        <div className='products-filters__title'>Collection</div>
        <ul className='products-filters__list'>{collectionsList}</ul>
      </div>
      <div className='products-filters__col products-filters__category'>
        <div className='products-filters__title'>Category</div>
        <ul className='products-filters__list'>{categoriesList}</ul>
      </div>
    </div>
  );
};

export default ProductsFilter;
