import FilterPill from '@Components/ui/FilterPill';
import ColorPill from '@Components/ui/ColorPill';
import PriceSlider from '../PriceRangeSlider/PriceRangeSlider';
import { ProductsListActions } from '@Types/productsListActions';
import { useState, useEffect } from 'react';
import './ProductsFilter.scss';

interface ProductsFilterProps {
  visible: boolean;
}

interface FiltersState {
  size?: string;
  brand?: string;
  color?: string;
  minPrice?: number;
  maxPrice?: number;
  collection?: string;
  category?: string;
}

const ProductsFilter: React.FC<ProductsFilterProps> = (
  props: ProductsFilterProps
) => {
  const [activeFilters, setActiveFilters] = useState<FiltersState>({});

  const handleClick = (filter: keyof FiltersState, value: string | number) => {
    setActiveFilters((prev) => {
      return {
        ...prev,
        [filter]: value,
      };
    });
  };

  const filterPill = (
    filterType: keyof FiltersState,
    filter: { id: string; name: string }
  ) => {
    return (
      <FilterPill
        key={filter.id}
        type={ProductsListActions.FILTER}
        handleClick={() => {
          handleClick(filterType, filter.id);
        }}
        active={filter.id === activeFilters[filterType] ? true : false}
      >
        {filter.name}
      </FilterPill>
    );
  };

  const sizes = [
    { id: '1', name: 'XS' },
    { id: '2', name: 'S' },
    { id: '3', name: 'M' },
    { id: '4', name: 'L' },
    { id: '5', name: 'XL' },
  ].map((size) => {
    return filterPill('size', size);
  });

  const brands = [
    { id: '1', name: 'Gucci' },
    { id: '2', name: 'Prada' },
    { id: '3', name: 'Burberry' },
    { id: '4', name: 'Dolce & Cabanna' },
    { id: '5', name: 'Versace' },
  ].map((brand) => {
    return filterPill('brand', brand);
  });

  const colors = [
    { id: '1', color: '#CA1010' },
    { id: '2', color: '#2127AF' },
    { id: '3', color: '#37940C' },
    { id: '4', color: '#333333' },
    { id: '5', color: '#AE19A8' },
    { id: '6', color: '#633102' },
  ].map((color) => {
    return (
      <ColorPill
        key={color.id}
        color={color.color}
        handleClick={() => {
          handleClick('color', color.id);
        }}
        active={color.id === activeFilters.color ? true : false}
      />
    );
  });

  const collections = [
    { id: '1', name: 'All Autumn Collection' },
    { id: '2', name: 'Footwear' },
    { id: '3', name: 'All Autumn Collection' },
    { id: '4', name: 'Footwear' },
    { id: '5', name: 'All Autumn Collection' },
  ].map((collection) => {
    return filterPill('collection', collection);
  });

  const categories = [
    { id: '1', name: 'Overcoats' },
    { id: '2', name: 'Boots' },
    { id: '3', name: 'Overcoats' },
    { id: '4', name: 'Boots' },
    { id: '5', name: 'Overcoats' },
  ].map((category) => {
    return filterPill('category', category);
  });
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
  }, []);

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
        <div className='products-filters__list'>{sizes}</div>
      </div>
      <div className='products-filters__col'>
        <div className='products-filters__title'>Brand</div>
        <div className='products-filters__brand products-filters__list'>
          {brands}
        </div>
      </div>
      <div className='products-filters__col products-filters__color'>
        <div className='products-filters__title'>COLOUR</div>
        <div className='products-filters__list'>{colors}</div>
      </div>
      <div className='products-filters__col products-filters__price'>
        <div className='products-filters__title'>Price</div>
        <PriceSlider handlePriceChange={handlePriceChange} />
      </div>
      <div className='products-filters__col products-filters__collection'>
        <div className='products-filters__title'>Collection</div>
        <div className='products-filters__list'>{collections}</div>
      </div>
      <div className='products-filters__col products-filters__category'>
        <div className='products-filters__title'>Category</div>
        <div className='products-filters__list'>{categories}</div>
      </div>
    </div>
  );
};

export default ProductsFilter;
