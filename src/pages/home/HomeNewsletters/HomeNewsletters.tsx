import Input from '@Components/form/Input';
import Button from '@Components/ui/Button';
import './HomeNewsletters.scss';
import { useState } from 'react';

const HomeNewsletters: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    console.log(`Form submitted with value ${inputValue}`);
  };

  return (
    <section className='home-newsletters'>
      <div className='home-newsletters__container ssh-container'>
        <div className='home-newsletters__row ssh-row'>
          <h2 className='home-newsletters__title'>Hear more from us</h2>
          <h3 className='home-newsletters__subtitle'>
            Subscribe to our newsletter
          </h3>
          <Input
            className='home-newsletters__input'
            placeholder='Email...'
            type='email'
            value={inputValue}
            onChange={handleChange}
          />
          <Button className='home-newsletters__button' onClick={handleClick}>
            SUBSCRIBE
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeNewsletters;
