import Button from '@Components/ui/Button';
import ProductCard from '@Components/ui/ProductCard';
import Slider from 'react-slick';
import { ReactComponent as Prev } from '@Assets/images/arrow-left.svg';
import { ReactComponent as Next } from '@Assets/images/arrow-right.svg';
import products from '@Utils/mocks';
import { RouterPaths } from '@Types/routerPaths';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { settings } from '@Utils/sliderConfig';
import './HomeFeaturedProducts.scss';
import { useRef } from 'react';
import { useNavigate } from 'react-router';

const HomeFeaturedProducts: React.FC = () => {
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
    <div className='home-slider'>
      <div className='home-slider__container ssh-container'>
        <div className='home-slider__title-container ssh-container'>
          <h2 className='home-slider__title section-title'>
            Discover your style
          </h2>
          <div className='home-slider__navigation'>
            <Prev
              onClick={goToPrev}
              className='home-slider__navigation--prev'
            />
            <Next
              onClick={goToNext}
              className='home-slider__navigation--next'
            />
          </div>
        </div>
        <Slider {...settings} ref={sliderRef}>
          {products.map((product, index) => {
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
        <div className='home-slider__button-container ssh-container'>
          <Button onClick={handleClick}>See More</Button>
        </div>
      </div>
    </div>
  );
};

export default HomeFeaturedProducts;
