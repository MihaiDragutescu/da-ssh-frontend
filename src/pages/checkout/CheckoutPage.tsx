import CheckoutAddress from './CheckoutAddress/CheckoutAddress';
import CheckoutSummary from './CheckoutSummary/CheckoutSummary';
import { Navigate } from 'react-router-dom';
import { RouterPaths } from '@Types/routerPaths';
import { useSelector } from 'react-redux';
import { RootState } from '@Store/index';

const CheckoutPage: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart);

  if (cart.cartItems.length === 0) {
    return <Navigate to={RouterPaths.CART} />;
  }

  return (
    <div className='ssh-container empty-cart-container'>
      <div className='ssh-row'>
        <CheckoutAddress />
        <CheckoutSummary />
      </div>
    </div>
  );
};

export default CheckoutPage;