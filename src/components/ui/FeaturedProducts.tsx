import Button from '@Components/ui/Button';
import ProductCard from '@Components/ui/ProductCard';
import Slider from 'react-slick';
import { ReactComponent as Prev } from '@Assets/images/arrow-left.svg';
import { ReactComponent as Next } from '@Assets/images/arrow-right.svg';
import { RouterPaths } from '@Types/routerPaths';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { settings } from '@Utils/sliderConfig';
import './FeaturedProducts.scss';
import { useRef } from 'react';
import { useNavigate } from 'react-router';

interface FeaturedProductsProps {
  products: {
    id: string;
    image: string;
    name: string;
    price: number;
    link: string;
  }[];
  showButton?: boolean;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = (
  props: FeaturedProductsProps
) => {
  const navigate = useNavigate();
  let sliderRef = useRef<Slider>(null);

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleClick = () => {
    navigate(RouterPaths.SHOP);
  };

  return (
    <div className='featured-products'>
      <div className='featured-products__container ssh-container'>
        <div className='featured-products__title-container ssh-container'>
          <h2 className='featured-products__title section-title'>
            Discover your style
          </h2>
          <div className='featured-products__navigation'>
            <Prev
              onClick={goToPrev}
              className='featured-products__navigation--prev'
            />
            <Next
              onClick={goToNext}
              className='featured-products__navigation--next'
            />
          </div>
        </div>
        <Slider {...settings} ref={sliderRef}>
          {props.products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                link={product.link}
              />
            );
          })}
        </Slider>
        {props.showButton && (
          <div className='featured-products__button-container ssh-container'>
            <Button onClick={handleClick}>See More</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
