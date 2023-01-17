import { ReactComponent as MenuExpand } from '@Assets/images/menu-bars.svg';
import { ReactComponent as MenuCollapse } from '@Assets/images/menu-xmark.svg';
import MenuLink from '../../shared/MenuLink';
import { RouterPaths } from '@Types/routerPaths';
import './HeaderLinks.scss';

interface HeaderLinksProps {
  mobileMenuExpanded: boolean;
  handleIconClick: () => void;
}

const HeaderLinks: React.FC<HeaderLinksProps> = (props: HeaderLinksProps) => {
  return (
    <div className='ssh-header__col ssh-header__links'>
      <div className='ssh-header__mobile-icons'>
        <MenuExpand
          onClick={props.handleIconClick}
          className={`ssh-header__mobile-icons--expand ${
            props.mobileMenuExpanded ? 'invisible-icon' : ''
          }`}
        />
        <MenuCollapse
          onClick={props.handleIconClick}
          className={`ssh-header__mobile-icons--collapse ${
            !props.mobileMenuExpanded ? 'invisible-icon' : ''
          }`}
        />
      </div>
      <div
        className={`ssh-header__links-list ${
          props.mobileMenuExpanded ? 'mobile-visible' : ''
        }`}
      >
        <MenuLink
          route={RouterPaths.HOME}
          content='Home'
          classes='ssh-header__link'
        />
        <MenuLink
          route={RouterPaths.SHOP}
          content='Shop'
          classes='ssh-header__link'
        />
        <MenuLink
          route={RouterPaths.CONTACT}
          content='Contact'
          classes='ssh-header__link'
        />
      </div>
    </div>
  );
};

export default HeaderLinks;
