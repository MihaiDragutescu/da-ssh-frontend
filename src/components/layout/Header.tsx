import './Header.scss';
import logo from '@Assets/images/logo.png';
import Input from '@Components/form/Input';
import Search from '@Assets/images/search-icon.svg';
import Modal from '@Components/ui/Modal';
import { ReactComponent as Cart } from '@Assets/images/basket-icon.svg';
import { ReactComponent as Profile } from '@Assets/images/user-icon.svg';
import { ReactComponent as MenuExpand } from '@Assets/images/menu-bars.svg';
import { ReactComponent as MenuCollapse } from '@Assets/images/menu-xmark.svg';
import { ActiveMenuLinkContextType } from '@Types/menu';
import ActiveMenuLinkContext from '@Context/activeMenuLink';
import { Link } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import { RouterPaths } from '@Types/routerPaths';

const Header: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputExpanded, setInputExpanded] = useState(false);
  const [mobileMenuExpanded, setMobileMenuExpanded] = useState(false);
  const [showSearchOverlay, setShowSearchOverlay] = useState(false);
  const { activeMenuLink, updateActiveMenuLink } = useContext(
    ActiveMenuLinkContext
  ) as ActiveMenuLinkContextType;

  const activeMenuLinkClass = 'active-menu-link';

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (
    event:
      | React.MouseEvent<HTMLImageElement>
      | React.FormEvent<HTMLFormElement>,
    isMobile: boolean = false
  ) => {
    event.preventDefault();

    if (inputValue) {
      console.log(`Searching ${inputValue} ...`);
      setInputValue('');
    } else {
      if (!isMobile) {
        setInputExpanded(!inputExpanded);
      }
    }
  };

  const handleIconClick = () => {
    setMobileMenuExpanded(!mobileMenuExpanded);
  };

  const handleLinkClick = (path: string) => {
    setMobileMenuExpanded(false);
    updateActiveMenuLink(path);
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    const headerElement = document.querySelector('.ssh-header');
    const headerSearch = document.querySelector('.ssh-header__search-mobile');

    if (position > 50) {
      headerElement!.classList.add('ssh-header--scrolled');
      headerSearch!.classList.add('hidden');
    } else {
      headerElement!.classList.remove('ssh-header--scrolled');
      headerSearch!.classList.remove('hidden');
    }
  };

  const hideOverlay = () => {
    setShowSearchOverlay(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuLink = (
    route: RouterPaths,
    content: React.ReactElement,
    classes?: string
  ): React.ReactElement => {
    return (
      <Link
        className={`${classes ?? 'ssh-header__link'} ${
          activeMenuLink === route ? activeMenuLinkClass : ''
        }`}
        onClick={() => handleLinkClick(route)}
        to={route}
      >
        {content}
      </Link>
    );
  };

  const modal = (
    <Modal
      onClose={hideOverlay}
      container={document.querySelector('#search-overlay-container')!}
    />
  );

  return (
    <header className='ssh-header'>
      <div className='ssh-header__container ssh-container'>
        <div className='ssh-header__row ssh-row'>
          <div className='ssh-header__col ssh-header__logo'>
            {menuLink(RouterPaths.HOME, <img src={logo} alt='logo' />)}
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
              {menuLink(RouterPaths.HOME, <>Home</>)}
              {menuLink(RouterPaths.SHOP, <>Shop</>)}
              {menuLink(RouterPaths.CONTACT, <>Contact</>)}
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

            {menuLink(
              RouterPaths.CART,
              <>
                <Cart />
                <span>9+</span>
              </>,
              'ssh-header__icons--cart'
            )}
            {menuLink(
              RouterPaths.PROFILE,
              <Profile />,
              'ssh-header__icons--profile'
            )}
          </div>
          <div className='ssh-header__col ssh-header__search-mobile'>
            <form onSubmit={handleSubmit}>
              <Input
                className='ssh-header__input'
                placeholder='Search...'
                type='text'
                value={inputValue}
                onChange={handleChange}
                onBlur={hideOverlay}
                onFocus={() => {
                  setShowSearchOverlay(true);
                }}
                icon={Search}
                iconClick={handleSubmit}
              />
            </form>
          </div>
        </div>
      </div>
      {showSearchOverlay && modal}
    </header>
  );
};

export default Header;
