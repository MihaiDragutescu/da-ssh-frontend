import ProductsActions from './ProductsActions/ProductsActions';
import ProductsList from './ProductsList/ProductsList';
import { useNavigate } from 'react-router-dom';
import { RouterPaths } from '@Types/routerPaths';
import { useEffect } from 'react';

const ProductsListPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const goHome = () => {
      if (window.location.pathname === RouterPaths.SHOP) {
        navigate(-1);
      }
    };

    window.addEventListener('popstate', goHome);

    return () => {
      window.removeEventListener('popstate', goHome);
    };
  }, []);

  return (
    <main id='main'>
      <ProductsActions />
      <ProductsList />
    </main>
  );
};

export default ProductsListPage;
