import './Header.scss';
import logo from '@Assets/images/logo.png';
import Modal from '@Components/ui/Modal';
import MenuLink from '../shared/MenuLink';
import HeaderLinks from './subcomponents/HeaderLinks';
import HeaderIconLinks from './subcomponents/HeaderIconLinks';
import HeaderMobileSearch from './subcomponents/HeaderMobileSearch';
import { useState, useEffect } from 'react';
import { RouterPaths } from '@Types/routerPaths';
import useBreakpoint from 'use-breakpoint';

const BREAKPOINTS = { mobile: 0, tablet: 991, desktop: 1250 };

const Header: React.FC = () => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS, 'desktop');
  const [inputExpanded, setInputExpanded] = useState(false);
  const [mobileMenuExpanded, setMobileMenuExpanded] = useState(false);
  const [showSearchOverlay, setShowSearchOverlay] = useState(false);
  const [menuScrolled, setMenuScrolled] = useState(false);

  const handleSubmit = (
    event: React.MouseEvent<HTMLImageElement> | React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const selector =
      breakpoint === 'mobile'
        ? '.ssh-header__search-mobile .ssh-input--simple'
        : '.ssh-header__icons-form .ssh-input--simple';

    const searchInput = document.querySelector(selector) as HTMLInputElement;

    if (searchInput.value) {
      console.log(`Searching ${searchInput.value} ...`);
      searchInput.value = '';
    } else {
      setInputExpanded(!inputExpanded);
    }
  };

  const handleIconClick = () => {
    setMobileMenuExpanded(!mobileMenuExpanded);
  };

  const closeMobileMenu = () => {
    setMobileMenuExpanded(false);
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    const windowWidth = window.innerWidth;

    if (
      (position > 60 && windowWidth > 600) ||
      (position > 50 && windowWidth <= 600)
    ) {
      setMenuScrolled(true);
      closeMobileMenu();
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
              content={<img src={logo} alt='DaSSH' />}
              classes='ssh-header__link'
              handleLinkClick={closeMobileMenu}
            />
          </div>
          <HeaderLinks
            mobileMenuExpanded={mobileMenuExpanded}
            handleIconClick={handleIconClick}
          />
          <HeaderIconLinks
            inputExpanded={inputExpanded}
            handleSubmit={handleSubmit}
            handleIconClick={closeMobileMenu}
          />
          <HeaderMobileSearch
            menuScrolled={menuScrolled}
            handleSubmit={handleSubmit}
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
