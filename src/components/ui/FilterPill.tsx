import './FilterPill.scss';

interface FilterPillProps {
  children?: React.ReactNode;
  active?: boolean;
  handleClick: () => void;
}

const FilterPill: React.FC<FilterPillProps> = (props) => {
  return (
    <div
      onClick={props.handleClick}
      className={`ssh-filter-pill ${props.active ? 'active-filter' : ''}`}
    >
      <span>{props.children}</span>
    </div>
  );
};

export default FilterPill;
