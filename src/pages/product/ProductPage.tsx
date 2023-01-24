import ProductInfo from './ProductInfo/ProductInfo';
import FeaturedProducts from '@Components/ui/FeaturedProducts';
import { products } from '@Utils/mocks';
import { useParams } from 'react-router-dom';

const ProductsPage = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);

  return (
    <>
      <ProductInfo product={product!} />
      <FeaturedProducts products={products} />
    </>
  );
};

export default ProductsPage;
