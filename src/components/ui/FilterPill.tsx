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
    <div
      onClick={props.handleClick}
      className={`ssh-filter-pill ${
        props.type === ProductsListActions.SORT ? 'ssh-sort-pill' : ''
      } ${props.active ? 'active-filter' : ''}`}
    >
      <span>{props.children}</span>
    </div>
  );
};

export default FilterPill;
