import './Input.scss';

interface InputProps {
  className?: string;
  label?: string;
  placeholder?: string;
  type: React.HTMLInputTypeAttribute;
  name?: string;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  icon?: string;
  iconClick?: (event: React.MouseEvent<HTMLImageElement>) => void;
}

const Input: React.FC<InputProps> = (props: InputProps) => {
  return (
    <div className={`ssh-input ${props.className ?? ''}`}>
      <label>
        {props.label}
        <input
          className={`${props.icon ? 'input-with-icon' : ''}`}
          placeholder={props.placeholder}
          type={props.type}
          name={props.name}
          onBlur={props.onBlur}
          onChange={props.onChange}
          value={props.value}
        />
      </label>
      {props.icon && (
        <img
          className='ssh-input__icon'
          onClick={props.iconClick}
          src={props.icon}
          alt='input-icon'
        />
      )}
    </div>
  );
};

export default Input;
