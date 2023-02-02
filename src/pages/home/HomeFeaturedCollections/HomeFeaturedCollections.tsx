import Button from '@Components/ui/Button';
import ProductCard from '@Components/ui/ProductCard';
import { CardLayouts } from '@Types/layouts';
import { RouterPaths } from '@Types/routerPaths';
import { featuredCollections } from '@Utils/mocks';
import { useNavigate } from 'react-router-dom';
import './HomeFeaturedCollections.scss';

const HomeFeaturedCollections: React.FC = () => {
  const navigate = useNavigate();
  const checkIndex = (index: number) => index % 3 === 2;
  const collections = featuredCollections.map((collection, index) => ({
    ...collection,
    className: `collection-card ${
      checkIndex(index) ? 'collection-card-large' : ''
    }`,
    layout: checkIndex(index) ? CardLayouts.HORIZONTAL : CardLayouts.VERTICAL,
  }));

  const handleClick = () => {
    navigate(RouterPaths.SHOP);
  };

  return (
    <section className='home-collections'>
      <div className='home-collections__container ssh-container'>
        <div className='home-collections__row ssh-row'>
          <div className='home-collections__title-container'>
            <h2 className='home-collections__title section-title'>
              Fresh out of the oven
            </h2>
          </div>
          <div className='home-collections__list'>
            {collections.map((collection) => {
              return (
                <ProductCard
                  classname={collection.className}
                  key={collection.id}
                  image={collection.image}
                  collection={collection.collection}
                  category={collection.category}
                  link={collection.link}
                  layout={collection.layout}
                />
              );
            })}
          </div>
          <div className='home-collections__button-container'>
            <Button onClick={handleClick}>See More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFeaturedCollections;
