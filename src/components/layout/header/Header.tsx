import './Header.scss';
import logo from '@Assets/images/logo.png';
import Modal from '@Components/ui/Modal';
import MenuLink from '../shared/MenuLink';
import HeaderLinks from './subcomponents/HeaderLinks';
import HeaderIconLinks from './subcomponents/HeaderIconLinks';
import HeaderMobileSearch from './subcomponents/HeaderMobileSearch';
import { useState, useEffect } from 'react';
import { RouterPaths } from '@Types/routerPaths';

const Header: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputExpanded, setInputExpanded] = useState(false);
  const [mobileMenuExpanded, setMobileMenuExpanded] = useState(false);
  const [showSearchOverlay, setShowSearchOverlay] = useState(false);
  const [menuScrolled, setMenuScrolled] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (
    event: React.MouseEvent<HTMLImageElement> | React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (inputValue) {
      console.log(`Searching ${inputValue} ...`);
      setInputValue('');
    } else {
      setInputExpanded(!inputExpanded);
    }
  };

  const handleIconClick = () => {
    setMobileMenuExpanded(!mobileMenuExpanded);
  };

  const handleScroll = () => {
    const position = window.pageYOffset;

    if (position > 50) {
      setMenuScrolled(true);
    } else {
      setMenuScrolled(false);
    }
  };

  const hideOverlay = () => {
    setShowSearchOverlay(false);
  };

  const handleFocus = () => {
    setShowSearchOverlay(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const modal = (
    <Modal
      onClose={hideOverlay}
      container={document.querySelector('#search-overlay-container')!}
    />
  );

  return (
    <header
      className={`ssh-header ${menuScrolled ? 'ssh-header--scrolled' : ''}`}
    >
      <div className='ssh-header__container ssh-container'>
        <div className='ssh-header__row ssh-row'>
          <div className='ssh-header__col ssh-header__logo'>
            <MenuLink
              route={RouterPaths.HOME}
              content={<img src={logo} alt='logo' />}
              classes='ssh-header__link'
            />
          </div>
          <HeaderLinks
            mobileMenuExpanded={mobileMenuExpanded}
            handleIconClick={handleIconClick}
          />
          <HeaderIconLinks
            inputExpanded={inputExpanded}
            inputValue={inputValue}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <HeaderMobileSearch
            menuScrolled={menuScrolled}
            inputValue={inputValue}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            handleFocus={handleFocus}
            hideOverlay={hideOverlay}
          />
        </div>
      </div>
      {showSearchOverlay && modal}
    </header>
  );
};

export default Header;
