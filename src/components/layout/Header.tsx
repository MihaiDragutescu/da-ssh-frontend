import './Header.scss';
import logo from '@Assets/images/logo.png';
import Input from '@Components/form/Input';
import Search from '@Assets/images/search-icon.svg';
import { ReactComponent as Cart } from '@Assets/images/basket-icon.svg';
import { ReactComponent as Profile } from '@Assets/images/user-icon.svg';
import { ReactComponent as MenuExpand } from '@Assets/images/menu-bars.svg';
import { ReactComponent as MenuCollapse } from '@Assets/images/menu-xmark.svg';
import { ActiveMenuLinkContextType } from '@Types/menu';
import ActiveMenuLinkContext from '@Context/activeMenuLink';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { RouterPaths } from '@Types/routerPaths';

const Header = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputExpanded, setInputExpanded] = useState(false);
  const { activeMenuLink, updateActiveMenuLink } = useContext(
    ActiveMenuLinkContext
  ) as ActiveMenuLinkContextType;
  const [mobileMenuExpanded, setMobileMenuExpanded] = useState(false);
  const [showValidationText, setshowValidationText] = useState(false);

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

  const handleSubmitMobile = (
    event: React.MouseEvent<HTMLImageElement> | React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    if (inputValue) {
      console.log(`Searching ${inputValue} ...`);
      setInputValue('');
      setshowValidationText(false);
    } else {
      setshowValidationText(true);
    }
  };

  const handleIconClick = () => {
    setMobileMenuExpanded(!mobileMenuExpanded);
  };

  const handleLinkClick = (path: string) => {
    setMobileMenuExpanded(false);
    updateActiveMenuLink(path);
  };

  return (
    <footer className='ssh-header'>
      <div className='ssh-header__container ssh-container'>
        <div className='ssh-header__row ssh-row'>
          <div className='ssh-header__col ssh-header__logo'>
            <Link
              onClick={() => handleLinkClick(RouterPaths.HOME)}
              to={RouterPaths.HOME}
            >
              <img src={logo} alt='logo' />
            </Link>
          </div>
          <div className='ssh-header__col ssh-header__links'>
            <div className='ssh-header__mobile-icons'>
              <MenuExpand
                onClick={handleIconClick}
                className={`ssh-header__mobile-icons--expand ${
                  mobileMenuExpanded ? 'invisible-icon' : ''
                }`}
              />
              <MenuCollapse
                onClick={handleIconClick}
                className={`ssh-header__mobile-icons--collapse ${
                  !mobileMenuExpanded ? 'invisible-icon' : ''
                }`}
              />
            </div>
            <div
              className={`ssh-header__links-list ${
                mobileMenuExpanded ? 'mobile-visible' : ''
              }`}
            >
              <Link
                className={`${
                  activeMenuLink === RouterPaths.HOME ? 'active-menu-link' : ''
                }`}
                onClick={() => handleLinkClick(RouterPaths.HOME)}
                to={RouterPaths.HOME}
              >
                Home
              </Link>
              <Link
                className={`${
                  activeMenuLink === RouterPaths.SHOP ? 'active-menu-link' : ''
                }`}
                onClick={() => handleLinkClick(RouterPaths.SHOP)}
                to={RouterPaths.SHOP}
              >
                Shop
              </Link>
              <Link
                className={`${
                  activeMenuLink === RouterPaths.CONTACT
                    ? 'active-menu-link'
                    : ''
                }`}
                onClick={() => handleLinkClick(RouterPaths.CONTACT)}
                to={RouterPaths.CONTACT}
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
                activeMenuLink === RouterPaths.CART ? 'active-menu-link' : ''
              }`}
              onClick={() => handleLinkClick(RouterPaths.CART)}
              to={RouterPaths.CART}
            >
              <Cart />
              <span>9+</span>
            </Link>
            <Link
              className={`ssh-header__icons--profile ${
                activeMenuLink === RouterPaths.PROFILE ? 'active-menu-link' : ''
              }`}
              onClick={() => handleLinkClick(RouterPaths.PROFILE)}
              to={RouterPaths.PROFILE}
            >
              <Profile />
            </Link>
          </div>
          <div className='ssh-header__col ssh-header__search-mobile'>
            <form onSubmit={handleSubmitMobile}>
              <Input
                validationText='The field is empty.'
                showValidation={showValidationText}
                className='ssh-header__input'
                placeholder='Search...'
                type='text'
                value={inputValue}
                onChange={handleChange}
                icon={Search}
                iconClick={handleSubmitMobile}
              />
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Header;
