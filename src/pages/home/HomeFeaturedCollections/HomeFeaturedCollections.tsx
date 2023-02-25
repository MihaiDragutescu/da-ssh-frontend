import Button from '@Components/ui/Button';
import ProductCard from '@Components/ui/ProductCard';
import { CardLayouts } from '@Types/layouts';
import { RouterPaths } from '@Types/routerPaths';
import { useNavigate, createSearchParams } from 'react-router-dom';
import Spinner from '@Components/ui/Spinner';
import ResponseMessage from '@Components/ui/ResponseMessage';
import {
  useGetFeaturedCollectionsQuery,
  updateActiveFilters,
  AppDispatch,
  resetActiveFilters,
  RootState,
} from '@Store/index';
import { useDispatch, useSelector } from 'react-redux';
import './HomeFeaturedCollections.scss';
import { sshApi } from '@App/store/api';

interface CollectionType {
  id: string;
  category: string;
  categoryId: string;
  className: string;
  image: string;
  layout: CardLayouts;
  name: string;
}

const HomeFeaturedCollections: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { data, error, isFetching } = useGetFeaturedCollectionsQuery();

  let featuredCollections, collections: CollectionType[];
  if (isFetching) {
    featuredCollections = <Spinner />;
  } else if (error) {
    featuredCollections = (
      <ResponseMessage>Error fetching collections.</ResponseMessage>
    );
  } else {
    if (data && data.length !== 0) {
      const checkIndex = (index: number) => index % 3 === 2;
      collections = data[0].categories.map((category, index) => ({
        id: data[0].id,
        categoryId: category.id,
        name: data[0].name,
        image: category.image,
        category: category.name,
        className: `collection-card ${
          checkIndex(index) ? 'collection-card-large' : ''
        }`,
        layout: checkIndex(index)
          ? CardLayouts.HORIZONTAL
          : CardLayouts.VERTICAL,
      }));

      featuredCollections = (
        <div className='home-collections__list'>
          {collections.map((collection, index) => {
            return (
              <ProductCard
                id={collection.id}
                classname={collection.className}
                key={collection.categoryId}
                image={collection.image}
                collection={collection.name}
                category={collection.category}
                layout={collection.layout}
              />
            );
          })}
        </div>
      );
    } else {
      featuredCollections = (
        <ResponseMessage>No collections found.</ResponseMessage>
      );
    }
  }

  const activeFilters = useSelector((state: RootState) => state.filters);
  // const { refetch } = useGetFilteredProductsQuery({
  //   page: 1,
  //   filtersList: activeFilters,
  // });

  const resetCachedProducts = async () => {
    await dispatch(
      sshApi.util.updateQueryData(
        'getFilteredProducts',
        { page: 1, filtersList: activeFilters },
        (draftProducts) => {
          draftProducts.products = [];
          draftProducts.totalCount = 0;
        }
      )
    );

    //   // refetch();
  };

  const handleClick = () => {
    dispatch(resetActiveFilters());
    dispatch(
      updateActiveFilters({ filter: 'collection', value: collections[0].name })
    );

    resetCachedProducts();

    navigate({
      pathname: RouterPaths.SHOP,
      search: createSearchParams({
        collection: `${collections[0].name}`,
      }).toString(),
    });
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
          {featuredCollections}
          <div className='home-collections__button-container'>
            <Button onClick={handleClick}>See More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFeaturedCollections;
