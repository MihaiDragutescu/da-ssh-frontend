import ProductCard from '@Components/ui/ProductCard';
import image1 from '@Assets/images/card-image-1.png';
import image2 from '@Assets/images/card-image-2.png';
import { ReactComponent as Filter } from '@Assets/images/filters-icon.svg';
import { ReactComponent as Sort } from '@Assets/images/sort-icon.svg';
import './ProductsList.scss';

const ProductsList: React.FC = () => {
  const products = [
    {
      id: '1',
      image: image1,
      name: 'Brown overcoat',
      price: 125,
      link: '#',
    },
    {
      id: '2',
      image: image2,
      name: 'Brown overcoat',
      price: 225,
      link: '#',
    },
    {
      id: '3',
      image: image1,
      name: 'Brown overcoat',
      price: 325,
      link: '#',
    },
    {
      id: '4',
      image: image2,
      name: 'Brown overcoat',
      price: 425,
      link: '#',
    },
    {
      id: '5',
      image: image1,
      name: 'Brown overcoat',
      price: 525,
      link: '#',
    },
    {
      id: '6',
      image: image2,
      name: 'Brown overcoat',
      price: 625,
      link: '#',
    },

    {
      id: '7',
      image: image2,
      name: 'Brown overcoat',
      price: 525,
      link: '#',
    },
    {
      id: '8',
      image: image1,
      name: 'Brown overcoat',
      price: 625,
      link: '#',
    },
    {
      id: '9',
      image: image2,
      name: 'Brown overcoat',
      price: 725,
      link: '#',
    },
  ];

  return (
    <div className='products-list'>
      <div className='products-list__container ssh-container'>
        <div className='products-list__row ssh-row'>
          <div className='products-list__actions'>
            <div className='products-list__filters'>
              <span>Filters</span>
              <Filter />
            </div>
            <div className='products-list__sort'>
              <span>Sort</span>
              <Sort />
            </div>
          </div>
          <div className='products-list__results'>
            {products.map((product, index) => {
              return (
                <ProductCard
                  key={product.id}
                  image={product.image}
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
