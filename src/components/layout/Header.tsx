import './Header.scss';
import logo from '@Assets/images/logo.png';
import Input from '@Components/form/Input';
import Search from '@Assets/images/search-icon.svg';
import { ReactComponent as Cart } from '@Assets/images/basket-icon.svg';
import { ReactComponent as Profile } from '@Assets/images/user-icon.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputExpanded, setInputExpanded] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (
    event: React.MouseEvent<HTMLImageElement> | React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (
      inputValue &&
      (event.type === 'submit' || (event.type === 'click' && inputExpanded))
    ) {
      console.log(`Searching ${inputValue} ...`);
      setInputValue('');
    } else {
      setInputExpanded(!inputExpanded);
    }
  };

  return (
    <footer className='ssh-header'>
      <div className='ssh-header__container ssh-container'>
        <div className='ssh-header__row ssh-row'>
          <div className='ssh-header__col ssh-header__logo'>
            <Link to='/'>
              <img src={logo} alt='logo' />
            </Link>
          </div>
          <div className='ssh-header__col ssh-header__links'>
            <Link to='/'>Home</Link>
            <Link to='/shop'>Shop</Link>
            <Link to='/contact'>Contact</Link>
          </div>
          <div className='ssh-header__col ssh-header__icons'>
            <form onSubmit={handleSubmit}>
              <Input
                className={`ssh-header__input ${
                  inputExpanded ? 'input-expanded' : ''
                }`}
                placeholder='Search...'
                type='text'
                value={inputValue}
                onChange={handleChange}
                icon={Search}
                iconClick={handleSubmit}
              />
            </form>
            <Link className='ssh-header__icons--cart' to='/cart'>
              <Cart />
            </Link>
            <Link className='ssh-header__icons--profile' to='/profile'>
              <Profile />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Header;
