import { FilterType } from '@Types/filter';
import Slider from 'react-slick';
import { productImagesSettings } from '@App/utils/slidersConfig';
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
        <div>
          <img
            src={image}
            alt='product'
            onClick={() => {
              props.handleImageClick('image', image);
            }}
          />
        </div>
      </div>
    );
  });

  return (
    <>
      <div className='product-info__image'>
        <img src={props.currentImage} alt='product' />
      </div>
      <div className='product-info__gallery'>
        <Slider {...productImagesSettings}>{gallery}</Slider>
      </div>
    </>
  );
};

export default ProductImages;
