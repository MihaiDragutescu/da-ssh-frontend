import './FooterSocials.scss';
import { ReactComponent as Facebook } from '@Assets/images/facebook.svg';
import { ReactComponent as Twitter } from '@Assets/images/twitter.svg';
import { ReactComponent as Instagram } from '@Assets/images/instagram.svg';

const FooterSocials: React.FC = () => {
  return (
    <div className='ssh-footer__col ssh-footer__socials'>
      <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
        <Facebook />
      </a>
      <a href='https://twitter.com/' target='_blank' rel='noreferrer'>
        <Twitter />
      </a>
      <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
        <Instagram />
      </a>
    </div>
  );
};

export default FooterSocials;
