import ColorPill from './ColorPill';
import { colors } from '@Utils/mocks';
import { FilterType } from '@Types/filter';

interface ColorsListProps {
  activeColor?: string[];
  handleClick: (type: keyof FilterType, value: string) => void;
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
        active={props.activeColor?.includes(color.id)}
      />
    );
  });

  return <>{colorsList}</>;
};

export default ColorsList;
