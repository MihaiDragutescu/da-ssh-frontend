import './Footer.scss';
import logo from '@Assets/images/logo.png';
import { ReactComponent as Facebook } from '@Assets/images/facebook.svg';
import { ReactComponent as Twitter } from '@Assets/images/twitter.svg';
import { ReactComponent as Instagram } from '@Assets/images/instagram.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='ssh-footer'>
      <div className='ssh-footer__container ssh-container'>
        <div className='ssh-footer__row ssh-row'>
          <div className='ssh-footer__col ssh-footer__logo'>
            <Link to='/'>
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
            <Link to='/privacy-policy'>Privacy Policy</Link>
            <Link to='/terms-and-conditions'>Terms and Conditions</Link>
          </div>
          <div className='ssh-footer__col ssh-footer__links ssh-footer__links--right'>
            <Link to='/contact'>Contact</Link>
            <Link to='/about'>About Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
