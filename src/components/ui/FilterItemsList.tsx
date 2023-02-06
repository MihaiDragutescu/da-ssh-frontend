import FilterPill from './FilterPill';
import { FilterType } from '@Types/filter';
import { ProductsListActions } from '@Types/productsListActions';

interface FilterListProps {
  list: { id: string; name: string }[];
  type: keyof FilterType;
  activeFilter?: string;
  handleClick: (type: keyof FilterType, filter: string) => void;
}

const FiltersList: React.FC<FilterListProps> = (props: FilterListProps) => {
  const filterPill = (
    filterType: keyof FilterType,
    filter: { id: string; name: string }
  ) => {
    return (
      <FilterPill
        key={filter.id}
        type={ProductsListActions.FILTER}
        handleClick={() => {
          props.handleClick(filterType, filter.id);
        }}
        active={filter.id === props.activeFilter}
      >
        {filter.name}
      </FilterPill>
    );
  };

  const filtersList = props.list.map((item) => {
    return filterPill(props.type, item);
  });

  return <>{filtersList}</>;
};

export default FiltersList;
