import { useFormContext } from 'react-hook-form';

interface fieldErrorProps {
  name: string;
}

const FieldError: React.FC<fieldErrorProps> = (props: fieldErrorProps) => {
  if (!props.name) return null;

  const {
    formState: { errors },
  } = useFormContext();

  const error = errors[props.name];

  return !error ? null : <span>{error.message?.toString()}</span>;
};

export default FieldError;
