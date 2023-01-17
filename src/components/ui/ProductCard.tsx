import Button from '@Components/ui/Button';
import { CardLayouts, CardLayoutDirections } from '@Types/layouts';
import { Link } from 'react-router-dom';
import './ProductCard.scss';

interface ProductCardProps {
  classname?: string;
  image: string;
  name?: string;
  price?: number;
  collection?: string;
  category?: string;
  link: string;
  layout?: CardLayouts;
  direction?: CardLayoutDirections;
  add_to_basket?: boolean;
}

const handleClick = () => {
  console.log('Product added to basket');
};

const ProductCard: React.FC<ProductCardProps> = (props) => {
  return (
    <div className={`product-card ${props.classname ?? ''}`}>
      <Link
        to={props.link}
        className={`product-card__layout-${
          props.layout ?? CardLayouts.VERTICAL
        } product-card__direction-${
          props.direction ?? CardLayoutDirections.LEFT_TO_RIGHT
        }`}
      >
        <img className='product-card__image' src={props.image} alt='product' />
        <div className='product-card__content'>
          {props.name && (
            <span className='product-card__name'>{props.name}</span>
          )}
          {props.price && (
            <span className='product-card__price'>{props.price} €</span>
          )}
          {props.collection && (
            <span className='product-card__collection'>{props.collection}</span>
          )}
          {props.category && (
            <span className='product-card__category'>{props.category}</span>
          )}
          {props.add_to_basket && (
            <Button className='product-card__button' onClick={handleClick}>
              Add to basket
            </Button>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
