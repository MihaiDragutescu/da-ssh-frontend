import ProductCard from '@Components/ui/ProductCard';
import { useEffect } from 'react';
import { useGetFilteredProductsQuery } from '@Store/index';
import type { RootState, AppDispatch } from '@Store/index';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '@Components/ui/Spinner';
import ResponseMessage from '@Components/ui/ResponseMessage';
import { updateCurrentPage, resetCurrentPage } from '@Store/index';
import { paginateNumber } from '@Utils/constants';
import './ProductsList.scss';

const ProductsList: React.FC = () => {
  const activeFilters = useSelector((state: RootState) => state.filters);
  const currentPage = useSelector((state: RootState) => state.pages.page);
  const { data, error, isFetching } = useGetFilteredProductsQuery({
    page: currentPage,
    filtersList: activeFilters,
  });
  const productsList = data?.products ?? [];
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const onScroll = () => {
      const footerHeight = (document.querySelector('footer') as HTMLElement)
        .offsetHeight;

      const scrolledToBottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - footerHeight;

      if (scrolledToBottom && !isFetching) {
        const totalCount = data?.totalCount ?? 0;
        const productsListed = data?.products.length ?? 0;

        if (
          productsListed < totalCount &&
          currentPage < totalCount / paginateNumber
        ) {
          dispatch(updateCurrentPage());
        } else {
          dispatch(resetCurrentPage());
        }
      }
    };

    document.addEventListener('scroll', onScroll);
    return function () {
      document.removeEventListener('scroll', onScroll);
    };
  }, [isFetching, currentPage]);

  return (
    <div className='products-list'>
      <div className='products-list__container ssh-container'>
        <div className='products-list__row ssh-row'>
          <div className='products-list__results'>
            {isFetching && <Spinner />}
            {error && (
              <ResponseMessage>Error fetching products.</ResponseMessage>
            )}
            {data && data.products.length === 0 ? (
              <ResponseMessage>No products found.</ResponseMessage>
            ) : (
              productsList.map((product, index) => {
                return (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    image={product.images[0]}
                    name={product.name}
                    brand={product.brand}
                    price={product.price}
                    add_to_basket
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
