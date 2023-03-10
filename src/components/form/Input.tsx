import { ComponentProps, forwardRef } from 'react';
import FieldError from './FieldError';
import './Input.scss';

interface InputProps extends ComponentProps<'input'> {
  className?: string;
  label?: string;
  icon?: string;
  iconClick?: (event: React.MouseEvent<HTMLImageElement>) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, type = 'text', label, icon, iconClick, ...props },
  ref
) {
  return (
    <div className={`ssh-input ${className ?? ''}`}>
      <div className='ssh-input__content'>
        <label>
          {label}
          <input
            className={`ssh-input--simple ${
              icon ? 'ssh-input--with-icon' : ''
            }`}
            placeholder={props.placeholder}
            type={type}
            onBlur={props.onBlur}
            onFocus={props.onFocus}
            ref={ref}
            {...props}
          />
        </label>
        {props.name ? <FieldError name={props.name} /> : ''}
      </div>
      {icon && (
        <img
          className='ssh-input__icon'
          onClick={iconClick}
          src={icon}
          alt='input-icon'
        />
      )}
    </div>
  );
});

export default Input;
