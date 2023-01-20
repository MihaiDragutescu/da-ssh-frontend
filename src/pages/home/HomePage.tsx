import HomeBanner from './HomeBanner/HomeBanner';
import HomeNewsletters from './HomeNewsletters/HomeNewsletters';
import HomeFeaturedProducts from './HomeFeaturedProducts/HomeFeaturedProducts';
import HomeFeaturedCollections from './HomeFeaturedCollections/HomeFeaturedCollections';

const HomePage = () => {
  return (
    <>
      <HomeBanner />
      <HomeFeaturedProducts />
      <HomeFeaturedCollections />
      <HomeNewsletters />
    </>
  );
};

export default HomePage;
