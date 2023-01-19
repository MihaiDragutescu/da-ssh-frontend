import './ColorPill.scss';

interface ColorPillProps {
  active?: boolean;
  handleClick: () => void;
  color: string;
}

const ColorPill: React.FC<ColorPillProps> = (props: ColorPillProps) => {
  return (
    <div
      onClick={props.handleClick}
      className='ssh-color-pill'
      style={props.active ? { border: `1px solid ${props.color}` } : undefined}
    >
      <div style={{ backgroundColor: props.color }}></div>
    </div>
  );
};

export default ColorPill;
