import useGetCartInfo from '@Hooks/useGetCartInfo';
import CartItemsList from './CartItemsList/CartItemsList';
import CartSummary from './CartSummary/CartSummary';
import ResponseMessage from '@Components/ui/ResponseMessage';
import { RouterPaths } from '@Types/routerPaths';
import { useNavigate } from 'react-router-dom';
import Button from '@Components/ui/Button';

const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const cart = useGetCartInfo();

  const handleClick = () => {
    navigate(RouterPaths.SHOP);
  };

  return (
    <main id='main'>
      {cart.count === 0 ? (
        <div className='ssh-container full-height-container'>
          <div className='ssh-row full-height'>
            <div className='cart-list__empty full-height-content'>
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
    </main>
  );
};

export default CartPage;
