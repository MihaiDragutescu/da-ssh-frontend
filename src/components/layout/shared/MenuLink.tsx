import { NavLink } from 'react-router-dom';
import { RouterPaths } from '@Types/routerPaths';

interface MenuLinkProps {
  route: RouterPaths;
  content: React.ReactElement | string;
  classes: string;
  handleLinkClick?: () => void;
}

const MenuLink: React.FC<MenuLinkProps> = (props: MenuLinkProps) => {
  const handleLinkClick = (route: string) => {
    if (props.handleLinkClick !== undefined) {
      props.handleLinkClick();
    }
  };

  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? `${props.classes} active-menu-link` : `${props.classes}`
      }
      onClick={() => handleLinkClick(props.route)}
      to={props.route}
    >
      {props.content}
    </NavLink>
  );
};

export default MenuLink;
