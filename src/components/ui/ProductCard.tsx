import Button from '@Components/ui/Button';
import { CardLayouts, CardLayoutDirections } from '@Types/layouts';
import { Link } from 'react-router-dom';
import { RouterPaths } from '@Types/routerPaths';
import {
  updateActiveFilters,
  AppDispatch,
  resetActiveFilters,
} from '@Store/index';
import { useDispatch } from 'react-redux';
import useResetCachedProducts from '@Hooks/useResetCachedProducts';
import './ProductCard.scss';

interface ProductCardProps {
  classname?: string;
  image: string;
  id: string;
  name?: string;
  price?: number;
  brand?: string;
  collection?: string;
  category?: string;
  layout?: CardLayouts;
  direction?: CardLayoutDirections;
  add_to_basket?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = (props: ProductCardProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { resetCache } = useResetCachedProducts();
  const route =
    props.category || props.collection
      ? `${RouterPaths.SHOP}?collection=${props.collection}&category=${props.category}`
      : `${RouterPaths.SHOP}/${props.id}`;

  const handleLinkClick = () => {
    if (props.collection && props.category) {
      dispatch(resetActiveFilters());
      dispatch(
        updateActiveFilters({
          filter: 'collection',
          value: props.collection ?? '',
        })
      );
      dispatch(
        updateActiveFilters({ filter: 'category', value: props.category ?? '' })
      );
      resetCache();
    }
  };

  const handleButtonClick = () => {
    console.log('Product added to basket');
  };

  return (
    <div className={`product-card ${props.classname ?? ''}`}>
      <div
        className={`product-card__layout-${
          props.layout ?? CardLayouts.VERTICAL
        } product-card__direction-${
          props.direction ?? CardLayoutDirections.LEFT_TO_RIGHT
        }`}
      >
        <Link
          className='product-card__image'
          to={route}
          onClick={handleLinkClick}
        >
          <img src={props.image} alt='product' />
        </Link>
        <div className='product-card__content'>
          {props.name && (
            <Link
              className='product-card__name'
              to={route}
              onClick={handleLinkClick}
            >
              <span>{props.name}</span>
            </Link>
          )}
          {props.brand && (
            <span className='product-card__brand'>by {props.brand}</span>
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
            <Button
              className='product-card__button'
              onClick={handleButtonClick}
            >
              Add to basket
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
