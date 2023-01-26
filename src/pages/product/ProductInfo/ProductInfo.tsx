import Accordion from '@Components/ui/Accordion';
import Button from '@Components/ui/Button';
import { ProductType } from '@Types/product';
import { FilterType } from '@Types/filter';
import { ReactComponent as Heart } from '@Assets/images/heart-icon.svg';
import { ReactComponent as HeartFilled } from '@Assets/images/heart-filled-icon.svg';
import { sizes, accordionList } from '@Utils/mocks';
import ColorsList from '@Components/ui/ColorsList';
import FilterItemsList from '@Components/ui/FilterItemsList';
import { useState, useEffect } from 'react';
import './ProductInfo.scss';

interface ProductInfoProps {
  product: ProductType;
}

interface ProductState {
  size?: string;
  color?: string;
  image?: string;
}

const ProductInfo: React.FC<ProductInfoProps> = (props: ProductInfoProps) => {
  const [productInfo, setProductInfo] = useState<ProductState>({});
  const [productInWishlist, setProductInWishlist] = useState(false);

  const gallery = props.product.images.map((image, index) => {
    return (
      <li
        key={index}
        className={`product-info__gallery-image ${
          productInfo.image === image ? 'active-image' : ''
        }`}
      >
        <img
          src={image}
          alt='product'
          onClick={() => {
            handleClick('image', image);
          }}
        />
      </li>
    );
  });

  const toggleWishlist = () => {
    setProductInWishlist(!productInWishlist);
  };

  const handleClick = (filter: keyof FilterType, value: string | number) => {
    setProductInfo((prev) => {
      return {
        ...prev,
        [filter]: value,
      };
    });
  };

  const colorsList = (
    <ColorsList activeColor={productInfo.color!} handleClick={handleClick} />
  );

  const sizesList = (
    <FilterItemsList
      list={sizes}
      type='size'
      activeFilter={productInfo.size!}
      handleClick={handleClick}
    />
  );

  const handleButtonClick = () => {
    console.log('Added to Cart');
  };

  useEffect(() => {
    setProductInfo({
      size: '3',
      color: '6',
      image: props.product.images[0],
    });
  }, []);

  return (
    <section className='product-info'>
      <div className='product-info__container ssh-container'>
        <div className='product-info__row ssh-row'>
          <div className='product-info__col product-info__col--left'>
            <div className='product-info__image'>
              <img src={productInfo.image} alt='product' />
            </div>
            <ul className='product-info__gallery'>{gallery}</ul>
          </div>
          <div className='product-info__col product-info__col--right'>
            <div className='product-info__title'>
              <h1>{props.product.name}</h1>
              <div className='product-info__wishlist' onClick={toggleWishlist}>
                {productInWishlist ? <HeartFilled /> : <Heart />}
              </div>
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