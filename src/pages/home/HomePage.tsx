import HomeBanner from './HomeBanner/HomeBanner';
import HomeNewsletters from './HomeNewsletters/HomeNewsletters';
import FeaturedProducts from '@Components/ui/FeaturedProducts';
import HomeFeaturedCollections from './HomeFeaturedCollections/HomeFeaturedCollections';
import { products } from '@Utils/mocks';

const HomePage = () => {
  return (
    <>
      <HomeBanner />
      <main id='main'>
        <FeaturedProducts products={products} showButton />
        <HomeFeaturedCollections />
        <HomeNewsletters />
      </main>
    </>
  );
};

export default HomePage;
