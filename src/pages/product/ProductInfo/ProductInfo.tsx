import Accordion from '@Components/ui/Accordion';
import Button from '@Components/ui/Button';
import { ProductType } from '@Types/product';
import { FiltersListType } from '@Types/filtersList';
import { ReactComponent as Heart } from '@Assets/images/heart-icon.svg';
import { ReactComponent as HeartFilled } from '@Assets/images/heart-filled-icon.svg';
import ColorsList from '@Components/ui/ColorsList';
import FilterItemsList from '@Components/ui/FilterItemsList';
import ProductImages from '../ProductImages/ProductImages';
import { useState, useEffect } from 'react';
import Spinner from '@Components/ui/Spinner';
import { ReactComponent as Check } from '@Assets/images/check-icon.svg';
import { timeout } from '@Utils/timeout';
import { AppDispatch, addToCart, RootState } from '@Store/index';
import { useDispatch, useSelector } from 'react-redux';
import { cartProductType } from '@Types/cartItem';
import './ProductInfo.scss';

interface ProductInfoProps {
  product: ProductType;
}

interface ProductState {
  size?: string;
  color?: string;
  image?: string;
  quantity?: number;
}

const ProductInfo: React.FC<ProductInfoProps> = (props: ProductInfoProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [productInfo, setProductInfo] = useState<ProductState>({});
  const [productInWishlist, setProductInWishlist] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const cart = useSelector((state: RootState) => state.cart);

  const toggleWishlist = () => {
    setProductInWishlist(!productInWishlist);
  };

  const handleClick = (filter: keyof FiltersListType, value: string) => {
    setProductInfo((prev) => {
      return {
        ...prev,
        [filter]: value,
      };
    });
  };

  const colorsList = (
    <ColorsList
      colors={props.product.color}
      activeColor={[productInfo.color ?? '']}
      handleClick={handleClick}
    />
  );

  const sizesList = (
    <FilterItemsList
      list={props.product.size}
      type='size'
      activeFilter={[productInfo.size ?? '']}
      handleClick={handleClick}
    />
  );

  const handleButtonClick = async () => {
    setIsAddingToCart(true);

    const product: cartProductType = {
      id: props.product.id,
      name: props.product.name,
      price: props.product.price,
      size: productInfo.size,
      color: productInfo.color ?? '',
      brand: props.product.brand ?? '',
      collection: props.product.collection ?? '',
      category: props.product.category ?? '',
      images: props.product.images,
    };

    dispatch(
      addToCart({
        product: product,
        quantity: productInfo.quantity ?? 1,
      })
    );
    await timeout(500);
    setIsAddingToCart(false);
    setAddedToCart(true);
    await timeout(1000);
    setAddedToCart(false);
  };

  const handleAddQuantity = () => {
    const newQuantity = quantity >= 99 ? 99 : quantity + 1;

    setProductInfo((prev) => {
      return { ...prev, quantity: newQuantity };
    });

    setQuantity(newQuantity);
  };

  const handleSubtractQuantity = () => {
    const newQuantity = quantity <= 1 ? 1 : quantity - 1;

    setProductInfo((prev) => {
      return { ...prev, quantity: newQuantity };
    });

    setQuantity(newQuantity);
  };

  useEffect(() => {
    setProductInfo({
      size: props.product.size ? props.product.size[0] : '',
      color: props.product.color[0],
      quantity: 1,
      image: props.product.images[0],
    });
  }, [props.product.id]);

  useEffect(() => {
    const localStorageCart = {
      ...JSON.parse(localStorage.getItem('cart') ?? '{}'),
      ...cart.cartItems,
    };
    localStorage.setItem('cart', JSON.stringify(localStorageCart));
  }, [cart]);

  return (
    <section className='product-info'>
      <div className='product-info__container ssh-container'>
        <div className='product-info__row ssh-row'>
          <div className='product-info__col product-info__col--left'>
            <ProductImages
              images={props.product.images}
              currentImage={productInfo.image ?? props.product.images[0]}
              handleImageClick={handleClick}
            />
          </div>
          <div className='product-info__col product-info__col--right'>
            <div className='product-info__title'>
              <h1>{props.product.name}</h1>
              <button
                type='button'
                className='product-info__wishlist'
                onClick={toggleWishlist}
                title='Toggle Wishlist'
              >
                {productInWishlist ? <HeartFilled /> : <Heart />}
              </button>
            </div>
            <div className='product-info__price'>{props.product.price} €</div>
            <div className='product-info__description'>
              {props.product.description}
            </div>
            <div className='product-info__color'>
              <div className='product-info__subtitle'>
                <span>Colour</span>
              </div>
              <ul className='product-info__color-list'>{colorsList}</ul>
            </div>
            {props.product.size && (
              <div className='product-info__size'>
                <div className='product-info__subtitle'>
                  <span>Size</span>
                </div>
                <ul className='product-info__size-list'>{sizesList}</ul>
              </div>
            )}
            <div className='product-info__accordion'>
              <Accordion accordionList={props.product.information ?? []} />
            </div>
            <div className='product-info__footer'>
              <div className='product-info__quantity'>
                <div className='product-info__quantity-box'>
                  <button
                    className='quantity-button quantity-button--subtract'
                    onClick={handleSubtractQuantity}
                  >
                    -
                  </button>
                  <span className='product-quantity'>{quantity}</span>
                  <button
                    className='quantity-button quantity-button--add'
                    onClick={handleAddQuantity}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className='product-info__button'>
                <Button onClick={handleButtonClick}>
                  {isAddingToCart ? (
                    <Spinner />
                  ) : addedToCart ? (
                    <Check />
                  ) : (
                    'Add to cart'
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
