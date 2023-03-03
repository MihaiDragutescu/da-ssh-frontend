import { RootState, useGetCartProductsQuery } from '@Store/index';
import { useSelector } from 'react-redux';

const useGetCartInfo = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const productIds = cart.cartItems.map((item) => item.productId);
  const { data, error } = useGetCartProductsQuery({ productIds });
  let productsList;

  if (!error && data) {
    productsList = data.map((product) => {
      const cartItem = cart.cartItems.find(
        (item) => item.productId === product.id
      );

      return {
        product,
        quantity: cartItem?.quantity ?? 1,
      };
    });
  }

  const productsNumber = productsList?.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return {
    products: productsList,
    count: productsNumber,
  };
};

export default useGetCartInfo;
