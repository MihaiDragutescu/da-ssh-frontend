import './Button.scss';

interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button className={`ssh-button ${props.className}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
