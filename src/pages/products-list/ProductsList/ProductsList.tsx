import ProductCard from '@Components/ui/ProductCard';
import { products } from '@Utils/mocks';
import './ProductsList.scss';

const ProductsList: React.FC = () => {
  return (
    <div className='products-list'>
      <div className='products-list__container ssh-container'>
        <div className='products-list__row ssh-row'>
          <div className='products-list__results'>
            {products.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  image={product.images[0]}
                  name={product.name}
                  price={product.price}
                  link={product.link}
                  add_to_basket
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
