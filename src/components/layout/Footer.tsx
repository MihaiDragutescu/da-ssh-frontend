import './Footer.scss';
import logo from '@Assets/images/logo.png';
import { ReactComponent as Facebook } from '@Assets/images/facebook.svg';
import { ReactComponent as Twitter } from '@Assets/images/twitter.svg';
import { ReactComponent as Instagram } from '@Assets/images/instagram.svg';
import { ActiveMenuLinkContextType } from '@Types/menu';
import ActiveMenuLinkContext from '@Context/activeMenuLink';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { RouterPaths } from '@Types/routerPaths';

const Footer = () => {
  const { activeMenuLink, updateActiveMenuLink } = useContext(
    ActiveMenuLinkContext
  ) as ActiveMenuLinkContextType;

  return (
    <footer className='ssh-footer'>
      <div className='ssh-footer__container ssh-container'>
        <div className='ssh-footer__row ssh-row'>
          <div className='ssh-footer__col ssh-footer__logo'>
            <Link
              onClick={() => updateActiveMenuLink(RouterPaths.HOME)}
              to={RouterPaths.HOME}
            >
              <img src={logo} alt='logo' />
            </Link>
            <span className='ssh-footer__copyright'>
              © 2022 All rights reserved
            </span>
          </div>
          <div className='ssh-footer__col ssh-footer__socials'>
            <a
              href='https://www.facebook.com/'
              target='_blank'
              rel='noreferrer'
            >
              <Facebook />
            </a>
            <a href='https://twitter.com/' target='_blank' rel='noreferrer'>
              <Twitter />
            </a>
            <a
              href='https://www.instagram.com/'
              target='_blank'
              rel='noreferrer'
            >
              <Instagram />
            </a>
          </div>
          <div className='ssh-footer__col ssh-footer__links ssh-footer__links--left'>
            <Link
              className={`${
                activeMenuLink === RouterPaths.PRIVACY_POLICY
                  ? 'active-menu-link'
                  : ''
              }`}
              onClick={() => updateActiveMenuLink(RouterPaths.PRIVACY_POLICY)}
              to={RouterPaths.PRIVACY_POLICY}
            >
              Privacy Policy
            </Link>
            <Link
              className={`${
                activeMenuLink === RouterPaths.TERMS_AND_CONDITIONS
                  ? 'active-menu-link'
                  : ''
              }`}
              onClick={() =>
                updateActiveMenuLink(RouterPaths.TERMS_AND_CONDITIONS)
              }
              to={RouterPaths.TERMS_AND_CONDITIONS}
            >
              Terms and Conditions
            </Link>
          </div>
          <div className='ssh-footer__col ssh-footer__links ssh-footer__links--right'>
            <Link
              className={`${
                activeMenuLink === RouterPaths.CONTACT ? 'active-menu-link' : ''
              }`}
              onClick={() => updateActiveMenuLink(RouterPaths.CONTACT)}
              to={RouterPaths.CONTACT}
            >
              Contact
            </Link>
            <Link
              className={`${
                activeMenuLink === RouterPaths.ABOUT ? 'active-menu-link' : ''
              }`}
              onClick={() => updateActiveMenuLink(RouterPaths.ABOUT)}
              to={RouterPaths.ABOUT}
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
