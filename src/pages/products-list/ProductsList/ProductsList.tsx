import ProductCard from '@Components/ui/ProductCard';
import { useState, useEffect } from 'react';
import { useGetProductsQuery } from '@Store/index';
import Spinner from '@Components/ui/Spinner';
import ResponseMessage from '@Components/ui/ResponseMessage';
import './ProductsList.scss';

const ProductsList: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data, error, isFetching } = useGetProductsQuery(page);

  let productsList;
  if (data && data.products.length !== 0) {
    productsList = (
      <div className='products-list__results'>
        {data.products.map((product) => {
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
        })}
      </div>
    );
  }

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

        if (productsListed < totalCount) {
          setPage(page + 1);
        }
      }
    };

    document.addEventListener('scroll', onScroll);
    return function () {
      document.removeEventListener('scroll', onScroll);
    };
  }, [page, isFetching]);

  return (
    <div className='products-list'>
      <div className='products-list__container ssh-container'>
        <div className='products-list__row ssh-row'>
          <>
            {isFetching && <Spinner />}
            {error && (
              <ResponseMessage>Error fetching products.</ResponseMessage>
            )}
            {data && data.products.length === 0 ? (
              <ResponseMessage>No products found.</ResponseMessage>
            ) : (
              productsList
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
