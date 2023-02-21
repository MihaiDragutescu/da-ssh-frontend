import HomeBanner from './HomeBanner/HomeBanner';
import HomeNewsletters from './HomeNewsletters/HomeNewsletters';
import FeaturedProducts from '@Components/ui/FeaturedProducts';
import HomeFeaturedCollections from './HomeFeaturedCollections/HomeFeaturedCollections';
import Spinner from '@Components/ui/Spinner';
import ResponseMessage from '@Components/ui/ResponseMessage';
import { useGetFeaturedProductsQuery } from '@Store/index';

const HomePage = () => {
  const { data, error, isFetching } = useGetFeaturedProductsQuery();

  let featuredProducts;
  if (isFetching) {
    featuredProducts = <Spinner />;
  } else if (error) {
    featuredProducts = (
      <ResponseMessage>Error fetching products.</ResponseMessage>
    );
  } else {
    data && data.length !== 0
      ? (featuredProducts = <FeaturedProducts products={data} showButton />)
      : (featuredProducts = (
          <ResponseMessage>No products found.</ResponseMessage>
        ));
  }

  return (
    <>
      <HomeBanner />
      <main id='main'>
        {featuredProducts}
        <HomeFeaturedCollections />
        <HomeNewsletters />
      </main>
    </>
  );
};

export default HomePage;
