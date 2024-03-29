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
        <button
          type='button'
          onClick={props.handleIconClick}
          title='Expand Menu'
        >
          <MenuExpand
            className={`ssh-header__mobile-icons--expand ${
              props.mobileMenuExpanded ? 'invisible-icon' : ''
            }`}
          />
        </button>
        <button
          type='button'
          onClick={props.handleIconClick}
          title='Collapse Menu'
        >
          <MenuCollapse
            className={`ssh-header__mobile-icons--collapse ${
              !props.mobileMenuExpanded ? 'invisible-icon' : ''
            }`}
          />
        </button>
      </div>
      <ul
        className={`ssh-header__links-list ${
          props.mobileMenuExpanded ? 'mobile-visible' : ''
        }`}
      >
        <li>
          <MenuLink
            route={RouterPaths.HOME}
            content='Home'
            classes='ssh-header__link'
            handleLinkClick={props.handleIconClick}
          />
        </li>
        <li>
          <MenuLink
            route={RouterPaths.SHOP}
            content='Shop'
            classes='ssh-header__link'
            handleLinkClick={props.handleIconClick}
          />
        </li>
        <li>
          <MenuLink
            route={RouterPaths.CONTACT}
            content='Contact'
            classes='ssh-header__link'
            handleLinkClick={props.handleIconClick}
          />
        </li>
      </ul>
    </div>
  );
};

export default HeaderLinks;
