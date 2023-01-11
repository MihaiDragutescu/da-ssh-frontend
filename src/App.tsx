import HomeBanner from '@App/pages/home/HomeBanner/HomeBanner';
import HomeNewsletters from '@App/pages/home/HomeNewsletters/HomeNewsletters';
import HomeSlider from '@App/pages/home/HomeSlider/HomeSlider';
import './App.scss';

const App = () => {
  return (
    <div>
      <HomeBanner />
      <HomeSlider />
      <HomeNewsletters />
    </div>
  );
};

export default App;
