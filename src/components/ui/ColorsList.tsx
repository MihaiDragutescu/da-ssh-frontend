import ColorPill from './ColorPill';
import { colors } from '@Utils/mocks';
import { FilterType } from '@Types/filter';

interface ColorsListProps {
  activeColor?: string;
  handleClick: (type: keyof FilterType, value: string | number) => void;
}

const ColorsList: React.FC<ColorsListProps> = (props: ColorsListProps) => {
  const colorsList = colors.map((color) => {
    return (
      <ColorPill
        key={color.id}
        color={color.color}
        handleClick={() => {
          props.handleClick('color', color.id);
        }}
        active={color.id === props.activeColor ? true : false}
      />
    );
  });

  return <>{colorsList}</>;
};

export default ColorsList;
