import Accordion from '@Components/ui/Accordion';
import Button from '@Components/ui/Button';
import { ProductType } from '@Types/product';
import { FiltersListType } from '@App/types/filtersList';
import { ReactComponent as Heart } from '@Assets/images/heart-icon.svg';
import { ReactComponent as HeartFilled } from '@Assets/images/heart-filled-icon.svg';
import { sizes, accordionList } from '@Utils/mocks';
import ColorsList from '@Components/ui/ColorsList';
import FilterItemsList from '@Components/ui/FilterItemsList';
import ProductImages from '../ProductImages/ProductImages';
import { useState, useEffect } from 'react';
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
  const [productInfo, setProductInfo] = useState<ProductState>({});
  const [productInWishlist, setProductInWishlist] = useState(false);
  const [quantity, setQuantity] = useState(1);

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
      activeColor={[productInfo.color as string]}
      handleClick={handleClick}
    />
  );

  const sizesList = (
    <FilterItemsList
      list={sizes}
      type='size'
      activeFilter={[productInfo.size as string]}
      handleClick={handleClick}
    />
  );

  const handleButtonClick = () => {
    console.log('Added to Cart');
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
      size: '3',
      color: '6',
      quantity: 1,
      image: props.product.images[0],
    });
  }, []);

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
            <div className='product-info__size'>
              <div className='product-info__subtitle'>
                <span>Size</span>
              </div>
              <ul className='product-info__size-list'>{sizesList}</ul>
            </div>
            <div className='product-info__quantity'>
              <div className='product-info__subtitle'>
                <span>Quantity</span>
              </div>
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
            <div className='product-info__accordion'>
              <Accordion accordionList={accordionList} />
            </div>
            <div className='product-info__button'>
              <Button onClick={handleButtonClick}>Add to Cart</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
