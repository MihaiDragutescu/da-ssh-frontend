interface ColorPillProps {
  active?: boolean;
  handleClick?: () => void;
  color: string;
}

const ColorPill: React.FC<ColorPillProps> = (props: ColorPillProps) => {
  return (
    <li
      className='ssh-color-pill w-8 h-8 p-1 rounded-full m-[3px]'
      style={props.active ? { border: `2px solid #${props.color}` } : {}}
    >
      <button
        className='rounded-full w-full h-full'
        title='Color'
        type='button'
        onClick={props.handleClick}
        style={{
          backgroundColor: `#${props.color}`,
        }}
      ></button>
    </li>
  );
};

export default ColorPill;
