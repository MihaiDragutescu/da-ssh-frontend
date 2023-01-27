import { FilterType } from '@Types/filter';
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
      <li
        key={index}
        className={`product-info__gallery-image ${
          props.currentImage === image ? 'active-image' : ''
        }`}
      >
        <img
          src={image}
          alt='product'
          onClick={() => {
            props.handleImageClick('image', image);
          }}
        />
      </li>
    );
  });

  return (
    <>
      <div className='product-info__image'>
        <img src={props.currentImage} alt='product' />
      </div>
      <ul className='product-info__gallery'>{gallery}</ul>
    </>
  );
};

export default ProductImages;
