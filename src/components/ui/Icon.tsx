export interface IconProps {
  onClick?: () => void;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const Icon: React.FC<IconProps> = ({ onClick, Icon }) => {
  return <Icon onClick={onClick} />;
};

export default Icon;
