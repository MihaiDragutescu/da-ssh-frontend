import ProductInfo from './ProductInfo/ProductInfo';
import FeaturedProducts from '@Components/ui/FeaturedProducts';
import { products } from '@Utils/mocks';
import { useParams, Navigate } from 'react-router-dom';
import { RouterPaths } from '@Types/routerPaths';

const ProductsPage = () => {
  const { id } = useParams();
  const product = products.find((prod) => prod.id === id);

  if (product === undefined) {
    return <Navigate to={RouterPaths.NOT_FOUND} />;
  }

  return (
    <>
      <ProductInfo product={product} />
      <FeaturedProducts products={products} />
    </>
  );
};

export default ProductsPage;
