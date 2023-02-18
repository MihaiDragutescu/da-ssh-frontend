import HomeBanner from './HomeBanner/HomeBanner';
import HomeNewsletters from './HomeNewsletters/HomeNewsletters';
import FeaturedProducts from '@Components/ui/FeaturedProducts';
import HomeFeaturedCollections from './HomeFeaturedCollections/HomeFeaturedCollections';
import Spinner from '@Components/ui/Spinner';
import ResponseMessage from '@Components/ui/ResponseMessage';
import { useGetFeaturedProductsQuery } from '@Store/index';

const HomePage = () => {
  const { data, error, isFetching } = useGetFeaturedProductsQuery();

  let content;
  if (isFetching) {
    content = <Spinner />;
  } else if (error) {
    content = <ResponseMessage>Error fetching products.</ResponseMessage>;
  } else {
    data && data.length !== 0
      ? (content = <FeaturedProducts products={data} showButton />)
      : (content = <ResponseMessage>No products found.</ResponseMessage>);
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
