import Button from '@Components/ui/Button';
import ProductCard from '@Components/ui/ProductCard';
import image1 from '@Assets/images/card-image-1.png';
import image2 from '@Assets/images/card-image-3.png';
import { CardLayouts } from '@Types/layouts';
import './HomeFeaturedCollections.scss';

const HomeFeaturedCollections: React.FC = () => {
  const checkIndex = (index: number) => index % 3 === 2;
  const collections = [
    {
      id: '1',
      image: image1,
      collection: 'All Autumn Collection',
      category: 'Overcoats',
      link: '#',
    },
    {
      id: '2',
      image: image1,
      collection: 'All Autumn Collection',
      category: 'Overcoats',
      link: '#',
    },
    {
      id: '3',
      image: image2,
      collection: 'Footwear',
      category: 'Boots',
      link: '#',
    },
  ].map((collection, index) => ({
    ...collection,
    className: `collection-card ${
      checkIndex(index) ? 'collection-card-large' : ''
    }`,
    layout: checkIndex(index) ? CardLayouts.HORIZONTAL : CardLayouts.VERTICAL,
  }));

  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <div className='home-collections'>
      <div className='home-collections__container ssh-container'>
        <div className='home-collections__row ssh-row'>
          <div className='home-collections__title-container'>
            <h2 className='home-collections__title section-title'>
              Fresh out of the oven
            </h2>
          </div>
          <div className='home-collections__list'>
            {collections.map((collection, index) => {
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
    </div>
  );
};

export default HomeFeaturedCollections;
