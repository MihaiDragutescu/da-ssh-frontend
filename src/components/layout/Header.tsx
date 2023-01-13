import './Header.scss';
import logo from '@Assets/images/logo.png';
import Input from '@Components/form/Input';
import Search from '@Assets/images/search-icon.svg';
import { ReactComponent as Cart } from '@Assets/images/basket-icon.svg';
import { ReactComponent as Profile } from '@Assets/images/user-icon.svg';
import { ActiveMenuLinkContextType } from '@Types/menu';
import ActiveMenuLinkContext from '@Context/activeMenuLink';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';

const Header = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputExpanded, setInputExpanded] = useState(false);
  const { activeMenuLink, updateActiveMenuLink } = useContext(
    ActiveMenuLinkContext
  ) as ActiveMenuLinkContextType;

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
            <Link onClick={() => updateActiveMenuLink('/')} to='/'>
              <img src={logo} alt='logo' />
            </Link>
          </div>
          <div className='ssh-header__col ssh-header__links'>
            <div className='ssh-header__links-list'>
              <Link
                className={`${
                  activeMenuLink === '/' ? 'active-menu-link' : ''
                }`}
                onClick={() => updateActiveMenuLink('/')}
                to='/'
              >
                Home
              </Link>
              <Link
                className={`${
                  activeMenuLink === '/shop' ? 'active-menu-link' : ''
                }`}
                onClick={() => updateActiveMenuLink('/shop')}
                to='/shop'
              >
                Shop
              </Link>
              <Link
                className={`${
                  activeMenuLink === '/contact' ? 'active-menu-link' : ''
                }`}
                onClick={() => updateActiveMenuLink('/contact')}
                to='/contact'
              >
                Contact
              </Link>
            </div>
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
            <Link
              className={`ssh-header__icons--cart ${
                activeMenuLink === '/cart' ? 'active-menu-link' : ''
              }`}
              onClick={() => updateActiveMenuLink('/cart')}
              to='/cart'
            >
              <Cart />
              <span>9+</span>
            </Link>
            <Link
              className={`ssh-header__icons--profile ${
                activeMenuLink === '/profile' ? 'active-menu-link' : ''
              }`}
              onClick={() => updateActiveMenuLink('/profile')}
              to='/profile'
            >
              <Profile />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Header;
