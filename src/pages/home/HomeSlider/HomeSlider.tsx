import Button from '@Components/ui/Button';
import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HomeSlider.scss';

const HomeSlider: React.FC = () => {
  const settings = {
    infinite: true,
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
  };

  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <div className='home-slider'>
      <div className='home-slider__container ssh-container'>
        <div className='home-slider__row'>
          <h2 className='home-slider__title section-title'>
            Discover your style
          </h2>
          <Slider {...settings}>
            <div>
              <img src='http://placekitten.com/g/400/200' />
            </div>
            <div>
              <img src='http://placekitten.com/g/400/200' />
            </div>
            <div>
              <img src='http://placekitten.com/g/400/200' />
            </div>
            <div>
              <img src='http://placekitten.com/g/400/200' />
            </div>
          </Slider>
          <div className='home-slider__button-container'>
            <Button onClick={handleClick}>See More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
