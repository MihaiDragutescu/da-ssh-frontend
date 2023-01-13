import { createContext, useState } from 'react';
import { ActiveMenuLinkContextType } from '@Types/menu';
import { useLocation } from 'react-router-dom';

const ActiveMenuLinkContext = createContext<ActiveMenuLinkContextType | null>(
  null
);

interface ProviderProps {
  children?: React.ReactNode;
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
  const location = useLocation();
  const [activeMenuLink, setActiveMenuLink] = useState(location.pathname);

  const updateActiveMenuLink = (updatedLink: string) => {
    setActiveMenuLink(updatedLink);
  };

  const valueToShare = {
    activeMenuLink,
    updateActiveMenuLink,
  };

  return (
    <ActiveMenuLinkContext.Provider value={valueToShare}>
      {children}
    </ActiveMenuLinkContext.Provider>
  );
};

export { Provider };
export default ActiveMenuLinkContext;
