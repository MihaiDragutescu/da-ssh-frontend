import { ActiveMenuLinkContextType } from '@Types/menu';
import ActiveMenuLinkContext from '@Context/activeMenuLink';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const useRedirectToUrl = () => {
  const { updateActiveMenuLink } = useContext(
    ActiveMenuLinkContext
  ) as ActiveMenuLinkContextType;
  const navigate = useNavigate();

  const handleRedirect = (path: string) => {
    updateActiveMenuLink(path);
    navigate(path);
  };

  return {
    handleRedirect,
  };
};

export default useRedirectToUrl;
