import FilterPill from '@Components/ui/FilterPill';
import { ProductsListActions } from '@Types/productsListActions';
import { sort } from '@Utils/mocks';
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

  const sortArray = sort.map((elem) => {
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
