import './FooterSocials.scss';
import { ReactComponent as Facebook } from '@Assets/images/facebook.svg';
import { ReactComponent as Twitter } from '@Assets/images/twitter.svg';
import { ReactComponent as Instagram } from '@Assets/images/instagram.svg';

const FooterSocials: React.FC = () => {
  return (
    <div className='ssh-footer__col'>
      <ul className='ssh-footer__socials'>
        <li>
          <a
            href='https://www.facebook.com/'
            target='_blank'
            rel='noreferrer'
            aria-label='Facebook page'
          >
            <Facebook />
          </a>
        </li>
        <li>
          <a
            href='https://twitter.com/'
            target='_blank'
            rel='noreferrer'
            aria-label='Twitter page'
          >
            <Twitter />
          </a>
        </li>
        <li>
          <a
            href='https://www.instagram.com/'
            target='_blank'
            rel='noreferrer'
            aria-label='Instagram page'
          >
            <Instagram />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterSocials;
