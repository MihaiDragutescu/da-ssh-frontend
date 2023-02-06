import './ColorPill.scss';

interface ColorPillProps {
  active?: boolean;
  handleClick: () => void;
  color: string;
}

const ColorPill: React.FC<ColorPillProps> = (props: ColorPillProps) => {
  return (
    <li
      className='ssh-color-pill'
      style={props.active ? { border: `2px solid ${props.color}` } : {}}
    >
      <button
        title='Color'
        type='button'
        onClick={props.handleClick}
        style={{ backgroundColor: props.color }}
      ></button>
    </li>
  );
};

export default ColorPill;
