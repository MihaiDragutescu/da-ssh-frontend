import './Footer.scss';
import FooterSocials from './subcomponents/FooterSocials';
import logo from '@Assets/images/logo.png';
import { RouterPaths } from '@Types/routerPaths';
import MenuLink from '../shared/MenuLink';

const Footer: React.FC = () => {
  return (
    <footer className='ssh-footer'>
      <div className='ssh-footer__container ssh-container'>
        <div className='ssh-footer__row ssh-row'>
          <div className='ssh-footer__col ssh-footer__logo'>
            <MenuLink
              classes='ssh-footer__link'
              route={RouterPaths.HOME}
              content={<img src={logo} alt='logo' />}
            />
            <span className='ssh-footer__copyright'>
              © 2022 All rights reserved
            </span>
          </div>
          <FooterSocials />
          <div className='ssh-footer__col'>
            <ul className='ssh-footer__links ssh-footer__links--left'>
              <li>
                <MenuLink
                  classes='ssh-footer__link'
                  route={RouterPaths.PRIVACY_POLICY}
                  content='Privacy Policy'
                />
              </li>
              <li>
                <MenuLink
                  classes='ssh-footer__link'
                  route={RouterPaths.TERMS_AND_CONDITIONS}
                  content='Terms and Conditions'
                />
              </li>
            </ul>
          </div>
          <div className='ssh-footer__col'>
            <ul className='ssh-footer__links ssh-footer__links--right'>
              <li>
                <MenuLink
                  classes='ssh-footer__link'
                  route={RouterPaths.CONTACT}
                  content='Contact'
                />
              </li>
              <li>
                <MenuLink
                  classes='ssh-footer__link'
                  route={RouterPaths.ABOUT}
                  content='About Us'
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
