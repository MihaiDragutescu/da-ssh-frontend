import useGetCartInfo from '@Hooks/useGetCartInfo';
import CartItemsList from './CartItemsList/CartItemsList';
import CartSummary from './CartSummary/CartSummary';
import ResponseMessage from '@Components/ui/ResponseMessage';
import { RouterPaths } from '@Types/routerPaths';
import { useNavigate } from 'react-router-dom';
import Button from '@Components/ui/Button';
import './CartPage.scss';

const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const cart = useGetCartInfo();

  const handleClick = () => {
    navigate(RouterPaths.SHOP);
  };

  return (
    <>
      {cart.count === 0 ? (
        <div className='ssh-container empty-cart-container'>
          <div className='ssh-row'>
            <div className='cart-list__empty'>
              <ResponseMessage className='sm:pt-0 md:pt-0'>
                There are no products in your cart.
              </ResponseMessage>
              <Button className='mx-auto' onClick={handleClick}>
                Go back shopping
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <CartItemsList />
          <CartSummary />
        </>
      )}
    </>
  );
};

export default CartPage;
