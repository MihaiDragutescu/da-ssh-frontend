import Button from '@Components/ui/Button';
import ProductCard from '@Components/ui/ProductCard';
import Slider from 'react-slick';
import image1 from '@Assets/images/card-image-1.png';
import image2 from '@Assets/images/card-image-2.png';
import { ReactComponent as Prev } from '@Assets/images/arrow-left.svg';
import { ReactComponent as Next } from '@Assets/images/arrow-right.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { settings } from '@Utils/slider-config';
import './HomeFeaturedProducts.scss';
import { useRef } from 'react';

const HomeFeaturedProducts: React.FC = () => {
  let sliderRef = useRef<Slider>(null);

  const products = [
    {
      id: '1',
      image: image1,
      name: 'Brown overcoat',
      price: 125,
      link: '#',
    },
    {
      id: '2',
      image: image2,
      name: 'Brown overcoat',
      price: 225,
      link: '#',
    },
    {
      id: '3',
      image: image1,
      name: 'Brown overcoat',
      price: 325,
      link: '#',
    },
    {
      id: '4',
      image: image2,
      name: 'Brown overcoat',
      price: 425,
      link: '#',
    },
    {
      id: '5',
      image: image1,
      name: 'Brown overcoat',
      price: 525,
      link: '#',
    },
    {
      id: '6',
      image: image2,
      name: 'Brown overcoat',
      price: 625,
      link: '#',
    },
  ];

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleClick = () => {
    console.log('Button clicked');
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
