import { RootState } from '@Store/index';
import { useSelector } from 'react-redux';

const useGetCartInfo = () => {
  const cart = useSelector((state: RootState) => state.cart);

  const productsNumber = cart.cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return {
    products: cart.cartItems,
    count: productsNumber,
  };
};

export default useGetCartInfo;
