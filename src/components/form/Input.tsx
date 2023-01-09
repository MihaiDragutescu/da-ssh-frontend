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
    </div>
  );
};

export default Input;
