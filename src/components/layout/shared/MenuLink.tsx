import { NavLink } from 'react-router-dom';
import { RouterPaths } from '@Types/routerPaths';
import useSetQueryParams from '@Hooks/useSetQueryParams';

interface MenuLinkProps {
  route: RouterPaths;
  content: React.ReactElement | string;
  classes: string;
  handleLinkClick?: () => void;
}

const MenuLink: React.FC<MenuLinkProps> = (props: MenuLinkProps) => {
  const { route } = useSetQueryParams(RouterPaths.SHOP);

  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? `${props.classes} active-menu-link` : `${props.classes}`
      }
      onClick={props.handleLinkClick}
      to={props.route === RouterPaths.SHOP ? route : props.route}
    >
      {props.content}
    </NavLink>
  );
};

export default MenuLink;
