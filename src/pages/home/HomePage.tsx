import HomeBanner from './HomeBanner/HomeBanner';
import HomeNewsletters from './HomeNewsletters/HomeNewsletters';
import FeaturedProducts from '@Components/ui/FeaturedProducts';
import HomeFeaturedCollections from './HomeFeaturedCollections/HomeFeaturedCollections';
import Spinner from '@Components/ui/Spinner';
import { useGetFeaturedProductsQuery } from '@Store/index';

const HomePage = () => {
  const { data, error, isFetching } = useGetFeaturedProductsQuery();

  let content;
  if (isFetching) {
    content = <Spinner />;
  } else if (error) {
    content = <div>Error fetching products.</div>;
  } else {
    data
      ? (content = <FeaturedProducts products={data} showButton />)
      : (content = <div>No products found.</div>);
  }

  return (
    <>
      <HomeBanner />
      <main id='main'>
        {content}
        <HomeFeaturedCollections />
        <HomeNewsletters />
      </main>
    </>
  );
};

export default HomePage;
