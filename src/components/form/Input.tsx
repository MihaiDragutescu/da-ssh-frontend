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
}

const Input: React.FC<InputProps> = (props: InputProps) => {
  return (
    <div className={`ssh-input ${props.className ?? ''}`}>
      <label>
        {props.label}
        <input
          placeholder={props.placeholder}
          type={props.type}
          name={props.name}
          onBlur={props.onBlur}
          onChange={props.onChange}
          value={props.value}
        />
      </label>
      <img src={props.icon} alt='' />
    </div>
  );
};

export default Input;
