import Modal from '@Components/ui/Modal';
import ProductsFilter from '../ProductsFilter/ProductsFilter';
import ProductsSort from '../ProductsSort/ProductsSort';
import { ReactComponent as Filter } from '@Assets/images/filters-icon.svg';
import { ReactComponent as Sort } from '@Assets/images/sort-icon.svg';
import { useState } from 'react';
import './ProductsActions.scss';

const ProductsActions: React.FC = () => {
  const [showFiltersOverlay, setShowFiltersOverlay] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [showSort, setShowSort] = useState(false);

  const toggleOverlay = () => {
    if (showFiltersOverlay) {
      setShowFiltersOverlay(false);
      setShowFilters(false);
      setShowSort(false);
    } else {
      setShowFiltersOverlay(true);
    }
  };

  const handleActionClick = (filters = true) => {
    if ((filters && showFilters) || (!filters && showSort)) {
      setShowFiltersOverlay(false);
      filters ? setShowFilters(false) : setShowSort(false);
    } else {
      setShowFilters(filters);
      setShowSort(!filters);
      setShowFiltersOverlay(true);
    }
  };

  const modal = (
    <Modal
      container={document.querySelector('.products-list')!}
      onClose={toggleOverlay}
    />
  );

  return (
    <div className='products-actions'>
      <div className='products-actions__container ssh-container'>
        <ProductsFilter visible={showFilters} />
        <ProductsSort visible={showSort} />
        <div className='products-actions__row ssh-row'>
          <button
            type='button'
            className='products-actions__filters'
            onClick={() => {
              handleActionClick();
            }}
          >
            <span>Filters</span>
            <Filter />
          </button>
          <button
            type='button'
            className='products-actions__sort'
            onClick={() => {
              handleActionClick(false);
            }}
          >
            <span>Sort</span>
            <Sort />
          </button>
          {showFiltersOverlay && modal}
        </div>
      </div>
    </div>
  );
};

export default ProductsActions;
