import Button from '@Components/ui/Button';
import ProductCard from '@Components/ui/ProductCard';
import Slider from 'react-slick';
import image1 from '@Assets/images/card-image-1.png';
import image2 from '@Assets/images/card-image-2.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HomeSlider.scss';
import { useRef } from 'react';

const HomeSlider: React.FC = () => {
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
  ];

  const settings = {
    infinite: true,
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
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
        </div>

        <Slider {...settings}>
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
        <div className='home-slider__button-container'>
          <Button onClick={handleClick}>See More</Button>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
