import ProductsActions from './ProductsActions/ProductsActions';
import ProductsList from './ProductsList/ProductsList';

const ProductsListPage = () => {
  return (
    <section className='products-section'>
      <ProductsActions />
      <ProductsList />
    </section>
  );
};

export default ProductsListPage;
