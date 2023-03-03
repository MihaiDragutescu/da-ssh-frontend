import ProductInfo from './ProductInfo/ProductInfo';
import FeaturedProducts from '@Components/ui/FeaturedProducts';
import Spinner from '@Components/ui/Spinner';
import ResponseMessage from '@Components/ui/ResponseMessage';
import { useParams, Navigate } from 'react-router-dom';
import { RouterPaths } from '@Types/routerPaths';
import { useGetProductQuery, useGetRelatedProductsQuery } from '@Store/index';

const ProductsPage = () => {
  const { id } = useParams();
  const product = useGetProductQuery(id ?? '');
  let relatedProducts;

  let productContent, relatedProductsContent;
  if (product.isFetching) {
    productContent = <Spinner />;
  } else if (product.error) {
    productContent = (
      <ResponseMessage>Error fetching product info.</ResponseMessage>
    );
  } else {
    if (product.data === undefined) {
      return <Navigate to={RouterPaths.NOT_FOUND} />;
    }
    productContent = <ProductInfo product={product.data} />;
  }

  relatedProducts = useGetRelatedProductsQuery(product.data?.category ?? '');

  if (relatedProducts.isFetching) {
    relatedProductsContent = <Spinner />;
  } else if (relatedProducts.error) {
    relatedProductsContent = (
      <ResponseMessage>Error fetching related producta.</ResponseMessage>
    );
  } else {
    if (relatedProducts.data && relatedProducts.data.length > 0) {
      relatedProductsContent = (
        <FeaturedProducts products={relatedProducts.data} />
      );
    } else {
      relatedProducts = (
        <ResponseMessage>No related products found.</ResponseMessage>
      );
    }
  }

  return (
    <main id='main'>
      {productContent}
      {relatedProductsContent}
    </main>
  );
};

export default ProductsPage;
