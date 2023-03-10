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

  return !error ? null : (
    <span className='text-lg sm:text-xl text-red-500 pt-1 pl-1 font-normal'>
      {error.message?.toString()}
    </span>
  );
};

export default FieldError;
