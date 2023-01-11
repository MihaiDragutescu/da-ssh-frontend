import Button from '@Components/ui/Button';
import './ProductCard.scss';

interface ProductCardProps {
  image: string;
  name?: string;
  price?: number;
  collection?: string;
  category?: string;
  link: string;
  add_to_basket?: boolean;
}

const handleClick = () => {
  console.log('Product added to basket');
};

const ProductCard: React.FC<ProductCardProps> = (props: ProductCardProps) => {
  return (
    <div className='product-card'>
      <a href={props.link}>
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
      </a>
    </div>
  );
};

export default ProductCard;
