import Button from '@Components/ui/Button';
import ProductCard from '@Components/ui/ProductCard';
import Slider from 'react-slick';
import { ReactComponent as Prev } from '@Assets/images/arrow-left.svg';
import { ReactComponent as Next } from '@Assets/images/arrow-right.svg';
import { ProductType } from '@Types/product';
import { RouterPaths } from '@Types/routerPaths';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { productsSliderSettings } from '@App/utils/slidersConfig';
import './FeaturedProducts.scss';
import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';

interface FeaturedProductsProps {
  products: ProductType[];
  showButton?: boolean;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = (
  props: FeaturedProductsProps
) => {
  const navigate = useNavigate();
  const sliderRef = useRef<Slider>(null);

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleClick = () => {
    navigate(RouterPaths.SHOP);
  };

  useEffect(() => {
    const links = document.querySelectorAll(
      '.featured-products .slick-slide a'
    ) as NodeListOf<HTMLElement>;

    links.forEach((link) => {
      link.tabIndex = -1;
    });
  }, []);

  return (
    <section className='featured-products'>
      <div className='featured-products__container ssh-container'>
        <div className='featured-products__title-container ssh-container'>
          <h2 className='featured-products__title section-title'>
            Discover your style
          </h2>
          <div className='featured-products__navigation'>
            <button
              type='button'
              onClick={goToPrev}
              title='Go To Previous Slides'
            >
              <Prev className='featured-products__navigation--prev' />
            </button>
            <button type='button' onClick={goToNext} title='Go To Next Slides'>
              <Next className='featured-products__navigation--next' />
            </button>
          </div>
        </div>
        <Slider {...productsSliderSettings} ref={sliderRef}>
          {props.products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                image={product.images[0]}
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
    </section>
  );
};

export default FeaturedProducts;
