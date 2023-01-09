import Input from '@Components/form/Input';
import './HomeNewsletters.scss';
import { useState } from 'react';

const HomeNewsletters: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className='home-newsletters'>
      <div className='home-newsletters__container ssh-container'>
        <div className='home-newsletters__row ssh-row'>
          <Input
            placeholder='Email...'
            type='email'
            value={inputValue}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeNewsletters;
