import { FiltersListType } from '@App/types/filtersList';
import Slider from 'react-slick';
import { productImagesSettings } from '@App/utils/slidersConfig';
import ImageMagnifier from '../ImageMagnifier';
import { useEffect } from 'react';
import './ProductImages.scss';

interface ProductImagesProps {
  images: string[];
  handleImageClick: (type: keyof FiltersListType, value: string) => void;
  currentImage: string;
}

const ProductImages: React.FC<ProductImagesProps> = (
  props: ProductImagesProps
) => {
  const gallery = props.images.map((image, index) => {
    return (
      <div
        key={index}
        className={`product-info__gallery-image ${
          props.currentImage === image ? 'active-image' : ''
        }`}
      >
        <button
          type='button'
          onClick={() => {
            props.handleImageClick('image', image);
          }}
        >
          <img src={image} alt='product' />
        </button>
      </div>
    );
  });

  useEffect(() => {
    const buttons = document.querySelectorAll(
      '.product-info__gallery .slick-prev, .product-info__gallery .slick-next'
    ) as NodeListOf<HTMLElement>;

    buttons.forEach((button) => {
      button.tabIndex = -1;
    });
  }, []);

  return (
    <>
      <div className='product-info__image'>
        <ImageMagnifier
          src={props.currentImage}
          magnifierHeight={150}
          magnifieWidth={150}
          zoomLevel={1.5}
        />
      </div>
      <div className='product-info__gallery'>
        <Slider {...productImagesSettings}>{gallery}</Slider>
      </div>
    </>
  );
};

export default ProductImages;
