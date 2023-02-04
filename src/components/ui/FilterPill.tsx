import { ProductsListActions } from '@Types/productsListActions';
import './FilterPill.scss';

interface FilterPillProps {
  children: React.ReactNode;
  type: ProductsListActions.FILTER | ProductsListActions.SORT;
  active?: boolean;
  handleClick: () => void;
}

const FilterPill: React.FC<FilterPillProps> = (props: FilterPillProps) => {
  return (
    <li
      className={`ssh-filter-pill ${
        props.type === ProductsListActions.SORT ? 'ssh-sort-pill' : ''
      } ${props.active ? 'active-filter' : ''}`}
    >
      <button type='button' onClick={props.handleClick}>
        <span>{props.children}</span>
      </button>
    </li>
  );
};

export default FilterPill;
