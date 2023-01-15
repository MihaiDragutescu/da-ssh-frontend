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

const Footer: React.FC = () => {
  const { activeMenuLink, updateActiveMenuLink } = useContext(
    ActiveMenuLinkContext
  ) as ActiveMenuLinkContextType;

  const activeMenuLinkClass = 'active-menu-link';

  const menuLink = (
    route: RouterPaths,
    content: React.ReactElement
  ): React.ReactElement => {
    return (
      <Link
        className={`ssh-footer__link ${
          activeMenuLink === route ? activeMenuLinkClass : ''
        }`}
        onClick={() => updateActiveMenuLink(route)}
        to={route}
      >
        {content}
      </Link>
    );
  };

  return (
    <footer className='ssh-footer'>
      <div className='ssh-footer__container ssh-container'>
        <div className='ssh-footer__row ssh-row'>
          <div className='ssh-footer__col ssh-footer__logo'>
            {menuLink(RouterPaths.HOME, <img src={logo} alt='logo' />)}
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
            {menuLink(RouterPaths.PRIVACY_POLICY, <>Privacy Policy</>)}
            {menuLink(
              RouterPaths.TERMS_AND_CONDITIONS,
              <>Terms and Conditions</>
            )}
          </div>
          <div className='ssh-footer__col ssh-footer__links ssh-footer__links--right'>
            {menuLink(RouterPaths.CONTACT, <>Contact</>)}
            {menuLink(RouterPaths.ABOUT, <>About Us</>)}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
