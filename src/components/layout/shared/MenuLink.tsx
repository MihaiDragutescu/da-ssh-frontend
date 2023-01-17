import { ActiveMenuLinkContextType } from '@Types/menu';
import ActiveMenuLinkContext from '@Context/activeMenuLink';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { RouterPaths } from '@Types/routerPaths';

interface MenuLinkProps {
  route: RouterPaths;
  content: React.ReactElement | string;
  classes: string;
  handleLinkClick?: () => void;
}

const MenuLink: React.FC<MenuLinkProps> = (props: MenuLinkProps) => {
  const { activeMenuLink, updateActiveMenuLink } = useContext(
    ActiveMenuLinkContext
  ) as ActiveMenuLinkContextType;

  const handleLinkClick = (route: string) => {
    updateActiveMenuLink(route);

    if (props.handleLinkClick !== undefined) {
      props.handleLinkClick();
    }
  };

  return (
    <Link
      className={`${props.classes} ${
        activeMenuLink === props.route ? 'active-menu-link' : ''
      }`}
      onClick={() => handleLinkClick(props.route)}
      to={props.route}
    >
      {props.content}
    </Link>
  );
};

export default MenuLink;
