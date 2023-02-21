import FilterPill from './FilterPill';
import { FiltersListType } from '@App/types/filtersList';
import { ProductsListActions } from '@Types/productsListActions';
import ResponseMessage from './ResponseMessage';

interface FilterListProps {
  list: string[] | undefined;
  type: keyof FiltersListType;
  activeFilter?: string[];
  handleClick: (type: keyof FiltersListType, filter: string) => void;
}

const FiltersList: React.FC<FilterListProps> = (props: FilterListProps) => {
  const filterPill = (
    filterType: keyof FiltersListType,
    filter: string,
    key: number
  ) => {
    return (
      <FilterPill
        key={key}
        type={ProductsListActions.FILTER}
        handleClick={() => {
          props.handleClick(filterType, filter);
        }}
        active={props.activeFilter?.includes(filter)}
      >
        {filter}
      </FilterPill>
    );
  };

  let filtersItemsList;
  if (props.list === undefined) {
    filtersItemsList = (
      <ResponseMessage>Error fetching filter data.</ResponseMessage>
    );
  } else {
    filtersItemsList = props.list.map((item, index) => {
      return filterPill(props.type, item, index);
    });
  }

  return <>{filtersItemsList}</>;
};

export default FiltersList;
