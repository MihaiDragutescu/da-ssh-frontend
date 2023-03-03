import Input from '@Components/form/Input';
import Button from '@Components/ui/Button';
import './HomeNewsletters.scss';
import { useState } from 'react';

const HomeNewsletters: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputValue) {
      console.log(`Form submitted with value ${inputValue}`);
      setInputValue('');
    }
  };

  return (
    <section className='home-newsletters'>
      <div className='home-newsletters__container ssh-container'>
        <div className='home-newsletters__row ssh-row'>
          <h2 className='home-newsletters__title'>Hear more from us</h2>
          <h3 className='home-newsletters__subtitle'>
            Subscribe to our newsletter
          </h3>
          <form className='home-newsletters__form' onSubmit={handleSubmit}>
            <Input
              className='home-newsletters__input'
              placeholder='Email...'
              type='email'
              required
              value={inputValue}
              onChange={handleChange}
            />
            <Button type='submit' className='home-newsletters__button'>
              SUBSCRIBE
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HomeNewsletters;
