import MenuLink from '../../shared/MenuLink';
import Input from '@Components/form/Input';
import { RouterPaths } from '@Types/routerPaths';
import { ReactComponent as Cart } from '@Assets/images/basket-icon.svg';
import { ReactComponent as Profile } from '@Assets/images/user-icon.svg';
import Search from '@Assets/images/search-icon.svg';
import useGetCartInfo from '@Hooks/useGetCartInfo';
import './HeaderIconLinks.scss';

interface HeaderIconLinksProps {
  inputExpanded: boolean;
  handleSubmit: (
    event: React.MouseEvent<HTMLImageElement> | React.FormEvent<HTMLFormElement>
  ) => void;
  handleIconClick: () => void;
}

const HeaderIconLinks: React.FC<HeaderIconLinksProps> = (
  props: HeaderIconLinksProps
) => {
  const cartInfo = useGetCartInfo();

  return (
    <ul className='ssh-header__col ssh-header__icons'>
      <li className='ssh-header__icons-form'>
        <form onSubmit={props.handleSubmit}>
          <Input
            className={`ssh-header__input ${
              props.inputExpanded ? 'input-expanded' : ''
            }`}
            placeholder='Search...'
            type='text'
            icon={Search}
            iconClick={props.handleSubmit}
          />
        </form>
      </li>
      <li>
        <MenuLink
          handleLinkClick={props.handleIconClick}
          route={RouterPaths.CART}
          content={
            <>
              <Cart />
              {cartInfo.count ? (
                <span>{cartInfo.count < 10 ? cartInfo.count : '9+'}</span>
              ) : null}
            </>
          }
          classes='ssh-header__link ssh-header__icons--cart'
        />
      </li>
      <li>
        <MenuLink
          handleLinkClick={props.handleIconClick}
          route={RouterPaths.PROFILE}
          content={<Profile />}
          classes='ssh-header__link ssh-header__icons--profile'
        />
      </li>
    </ul>
  );
};

export default HeaderIconLinks;
