import HomeBanner from '@Pages/home/HomeBanner/HomeBanner';
import HomeNewsletters from '@Pages/home/HomeNewsletters/HomeNewsletters';
import HomeFeaturedProducts from '@Pages/home/HomeFeaturedProducts/HomeFeaturedProducts';
import HomeFeaturedCollections from '@Pages/home/HomeFeaturedCollections/HomeFeaturedCollections';
import './App.scss';

const App = () => {
  return (
    <div>
      <HomeBanner />
      <HomeFeaturedProducts />
      <HomeFeaturedCollections />
      <HomeNewsletters />
    </div>
  );
};

export default App;
