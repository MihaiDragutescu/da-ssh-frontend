import { ReactComponent as SpinnerIcon } from '@Assets/images/spinner.svg';

const Spinner: React.FC = () => {
  return (
    <div className='ssh-spinner flex justify-center py-8 sm:py-11 md:py-14 w-full'>
      <SpinnerIcon />
    </div>
  );
};

export default Spinner;
