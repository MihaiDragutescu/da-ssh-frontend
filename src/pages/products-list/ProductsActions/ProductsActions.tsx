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
  const [noFilters, setNoFilters] = useState(true);
  const [showSort, setShowSort] = useState(false);

  const handleNoFilters = (value: boolean) => {
    setNoFilters(value);
  };

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
        <ProductsFilter
          handleNoFilters={handleNoFilters}
          visible={showFilters}
        />
        <ProductsSort visible={showSort} />
        <div className='products-actions__row ssh-row'>
          <button
            type='button'
            className='products-actions__filters'
            onClick={() => {
              handleActionClick();
            }}
          >
            <span className='products-actions__filters-label'>
              Filters
              {!noFilters && <span className='active-filters'></span>}
            </span>
            <Filter />
          </button>
          <button
            tabIndex={0}
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
