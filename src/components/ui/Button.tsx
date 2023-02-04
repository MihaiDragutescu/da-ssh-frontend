import './Button.scss';

interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  type?: 'submit' | 'button';
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button
      className={`ssh-button ${props.className ?? ''}`}
      type={props.type ?? 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
