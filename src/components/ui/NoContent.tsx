import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { RouterPaths } from '@Types/routerPaths';

interface noContentProps {
  children: React.ReactNode;
}

const NoContent: React.FC<noContentProps> = (props: noContentProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(RouterPaths.HOME);
  };

  return (
    <div className='flex flex-col justify-center w-full'>
      <div className='full-height-content'>
        <span className='block text-center text-4xl text-brown sm:text-5xl md:text-6xl font-[DancingScript] py-8 sm:pb-12 sm:pt-0'>
          {props.children}
        </span>
        <Button className='mx-auto' onClick={handleClick}>
          Go Back Home
        </Button>
      </div>
    </div>
  );
};

export default NoContent;
