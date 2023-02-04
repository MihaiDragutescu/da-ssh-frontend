import ProductsActions from './ProductsActions/ProductsActions';
import ProductsList from './ProductsList/ProductsList';

const ProductsListPage = () => {
  return (
    <div className='products-section'>
      <ProductsActions />
      <ProductsList />
    </div>
  );
};

export default ProductsListPage;
