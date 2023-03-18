import { ComponentProps, forwardRef } from 'react';
import FieldError from './FieldError';
import './Textarea.scss';

interface TextareaProps extends ComponentProps<'textarea'> {
  className?: string;
  label?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea({ className, label, ...props }, ref) {
    return (
      <div className={`ssh-textarea ${className ?? ''}`}>
        <label>
          {label}
          <textarea placeholder={props.placeholder} ref={ref} {...props} />
        </label>
        {props.name ? <FieldError name={props.name} /> : ''}
      </div>
    );
  }
);

export default Textarea;
