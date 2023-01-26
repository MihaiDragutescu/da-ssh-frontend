import './ColorPill.scss';

interface ColorPillProps {
  active?: boolean;
  handleClick: () => void;
  color: string;
}

const ColorPill: React.FC<ColorPillProps> = (props: ColorPillProps) => {
  return (
    <li
      onClick={props.handleClick}
      className='ssh-color-pill'
      style={props.active ? { border: `1px solid ${props.color}` } : undefined}
    >
      <div style={{ backgroundColor: props.color }}></div>
    </li>
  );
};

export default ColorPill;
