import './Button.scss';

interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  className,
  children,
  onClick,
  ...rest
}) => {
  return (
    <button className={`ssh-button ${className}`} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
