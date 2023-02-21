import FilterPill from '@Components/ui/FilterPill';
import { ProductsListActions } from '@Types/productsListActions';
import { useState } from 'react';
import { useGetFiltersQuery } from '@Store/index';
import ResponseMessage from '@Components/ui/ResponseMessage';
import './ProductsSort.scss';

interface ProductsSortProps {
  visible: boolean;
}

const ProductsSort: React.FC<ProductsSortProps> = (
  props: ProductsSortProps
) => {
  const [activeSort, setActiveSort] = useState('Price - Low to High');

  const handleClick = (id: string) => {
    setActiveSort(id);
  };

  const sortItems = useGetFiltersQuery();
  let sortList;

  if (sortItems.data === undefined) {
    sortList = <ResponseMessage>Error fetching sort data.</ResponseMessage>;
  } else {
    sortList = sortItems.data
      .filter((filter) => filter.type === 'sort')
      .map((elem, index) => {
        return (
          <FilterPill
            key={index}
            type={ProductsListActions.SORT}
            handleClick={() => {
              handleClick(elem.name);
            }}
            active={elem.name === activeSort}
          >
            {elem.name}
          </FilterPill>
        );
      });
  }

  return (
    <div className={`products-sort ${!props.visible ? 'hidden' : ''}`}>
      <ul>{sortList}</ul>
    </div>
  );
};

export default ProductsSort;
