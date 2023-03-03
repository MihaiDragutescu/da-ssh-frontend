import ColorPill from './ColorPill';
import { FiltersListType } from '@Types/filtersList';
import ResponseMessage from './ResponseMessage';

interface ColorsListProps {
  colors?: string[];
  activeColor?: string[];
  handleClick: (type: keyof FiltersListType, value: string) => void;
}

const ColorsList: React.FC<ColorsListProps> = (props: ColorsListProps) => {
  let colorsList;
  if (props.colors === undefined) {
    colorsList = <ResponseMessage>Error fetching colors.</ResponseMessage>;
  } else {
    colorsList = props.colors.map((color, index) => {
      return (
        <ColorPill
          key={index}
          color={color}
          handleClick={() => {
            props.handleClick('color', color);
          }}
          active={props.activeColor?.includes(color)}
        />
      );
    });
  }

  return <>{colorsList}</>;
};

export default ColorsList;
