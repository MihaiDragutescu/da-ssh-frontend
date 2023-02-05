import ProductsActions from './ProductsActions/ProductsActions';
import ProductsList from './ProductsList/ProductsList';

const ProductsListPage = () => {
  return (
    <main id='main'>
      <ProductsActions />
      <ProductsList />
    </main>
  );
};

export default ProductsListPage;
