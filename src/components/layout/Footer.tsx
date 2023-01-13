import './Footer.scss';
import logo from '@Assets/images/logo.png';
import { ReactComponent as Facebook } from '@Assets/images/facebook.svg';
import { ReactComponent as Twitter } from '@Assets/images/twitter.svg';
import { ReactComponent as Instagram } from '@Assets/images/instagram.svg';
import { ActiveMenuLinkContextType } from '@Types/menu';
import ActiveMenuLinkContext from '@Context/activeMenuLink';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

const Footer = () => {
  const { activeMenuLink, updateActiveMenuLink } = useContext(
    ActiveMenuLinkContext
  ) as ActiveMenuLinkContextType;

  return (
    <footer className='ssh-footer'>
      <div className='ssh-footer__container ssh-container'>
        <div className='ssh-footer__row ssh-row'>
          <div className='ssh-footer__col ssh-footer__logo'>
            <Link onClick={() => updateActiveMenuLink('/')} to='/'>
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
                activeMenuLink === '/privacy-policy' ? 'active-menu-link' : ''
              }`}
              onClick={() => updateActiveMenuLink('/privacy-policy')}
              to='/privacy-policy'
            >
              Privacy Policy
            </Link>
            <Link
              className={`${
                activeMenuLink === '/terms-and-conditions'
                  ? 'active-menu-link'
                  : ''
              }`}
              onClick={() => updateActiveMenuLink('/terms-and-conditions')}
              to='/terms-and-conditions'
            >
              Terms and Conditions
            </Link>
          </div>
          <div className='ssh-footer__col ssh-footer__links ssh-footer__links--right'>
            <Link
              className={`${
                activeMenuLink === '/contact' ? 'active-menu-link' : ''
              }`}
              onClick={() => updateActiveMenuLink('/contact')}
              to='/contact'
            >
              Contact
            </Link>
            <Link
              className={`${
                activeMenuLink === '/about' ? 'active-menu-link' : ''
              }`}
              onClick={() => updateActiveMenuLink('/about')}
              to='/about'
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
