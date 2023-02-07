import { FilterType } from '@Types/filter';
import Slider from 'react-slick';
import { productImagesSettings } from '@App/utils/slidersConfig';
import { Zoom } from 'reactjs-image-zoom';
import './ProductImages.scss';

interface ProductImagesProps {
  images: string[];
  handleImageClick: (type: keyof FilterType, value: string | number) => void;
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

  return (
    <>
      <div className='product-info__image'>
        <img src={props.currentImage} alt='selected-product' />
        <Zoom
          position='center'
          imagesrc={props.currentImage}
          size={200}
          cursor='zoom-in'
          repeat='repeat'
          className='product-info__image-box'
        />
      </div>
      <div className='product-info__gallery'>
        <Slider {...productImagesSettings}>{gallery}</Slider>
      </div>
    </>
  );
};

export default ProductImages;
