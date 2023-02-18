import FilterPill from './FilterPill';
import { FiltersListType } from '@App/types/filtersList';
import { ProductsListActions } from '@Types/productsListActions';

interface FilterListProps {
  list: { id: string; name: string }[];
  type: keyof FiltersListType;
  activeFilter?: string[];
  handleClick: (type: keyof FiltersListType, filter: string) => void;
}

const FiltersList: React.FC<FilterListProps> = (props: FilterListProps) => {
  const filterPill = (
    filterType: keyof FiltersListType,
    filter: { id: string; name: string }
  ) => {
    return (
      <FilterPill
        key={filter.id}
        type={ProductsListActions.FILTER}
        handleClick={() => {
          props.handleClick(filterType, filter.id);
        }}
        active={props.activeFilter?.includes(filter.id)}
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
