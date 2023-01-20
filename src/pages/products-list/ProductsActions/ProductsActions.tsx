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

  const handleFiltersClick = () => {
    if (showFilters) {
      setShowFilters(false);
      setShowFiltersOverlay(false);
    } else {
      setShowFilters(true);
      setShowSort(false);
      setShowFiltersOverlay(true);
    }
  };

  const handleSortClick = () => {
    if (showSort) {
      setShowSort(false);
      setShowFiltersOverlay(false);
    } else {
      setShowSort(true);
      setShowFilters(false);
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
          <div
            className='products-actions__filters'
            onClick={handleFiltersClick}
          >
            <span>Filters</span>
            <Filter />
          </div>
          <div className='products-actions__sort' onClick={handleSortClick}>
            <span>Sort</span>
            <Sort />
          </div>
          {showFiltersOverlay && modal}
        </div>
      </div>
    </div>
  );
};

export default ProductsActions;
