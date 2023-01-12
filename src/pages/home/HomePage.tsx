import HomeBanner from '@Pages/home/HomeBanner/HomeBanner';
import HomeNewsletters from '@Pages/home/HomeNewsletters/HomeNewsletters';
import HomeFeaturedProducts from '@Pages/home/HomeFeaturedProducts/HomeFeaturedProducts';
import HomeFeaturedCollections from '@Pages/home/HomeFeaturedCollections/HomeFeaturedCollections';

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
