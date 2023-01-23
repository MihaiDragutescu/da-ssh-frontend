import FilterPill from '@Components/ui/FilterPill';
import { ProductsListActions } from '@Types/productsListActions';
import { useState } from 'react';
import './ProductsSort.scss';

interface ProductsSortProps {
  visible: boolean;
}

const ProductsSort: React.FC<ProductsSortProps> = (
  props: ProductsSortProps
) => {
  const [activeSort, setActiveSort] = useState('1');

  const handleClick = (id: string) => {
    setActiveSort(id);
  };

  const sortArray = [
    { id: '1', type: 'Price - Low to High' },
    { id: '2', type: 'Price - High to Low' },
    { id: '3', type: 'Newest' },
  ].map((elem) => {
    return (
      <FilterPill
        key={elem.id}
        type={ProductsListActions.SORT}
        handleClick={() => {
          handleClick(elem.id);
        }}
        active={elem.id === activeSort ? true : false}
      >
        {elem.type}
      </FilterPill>
    );
  });

  return (
    <div className={`products-sort ${!props.visible ? 'hidden' : ''}`}>
      <>{sortArray}</>
    </div>
  );
};

export default ProductsSort;
