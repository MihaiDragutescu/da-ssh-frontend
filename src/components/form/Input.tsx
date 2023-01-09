import './Input.scss';

interface InputProps {
  className?: string;
  label?: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  name?: string;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  children?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  className,
  label,
  placeholder,
  type,
  name,
  onBlur,
  onChange,
  value,
  children,
  ...rest
}) => {
  return (
    <div className={`ssh-input ${className}`}>
      <label>
        {label}
        <input
          placeholder={placeholder}
          type={type}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          value={value}
          {...rest}
        />
      </label>
      {children}
    </div>
  );
};

export default Input;
