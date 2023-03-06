import CartItem from '../CartItem/CartItem';
import useGetCartInfo from '@Hooks/useGetCartInfo';
import ResponseMessage from '@Components/ui/ResponseMessage';
import Button from '@Components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { RouterPaths } from '@Types/routerPaths';
import './CartItemsList.scss';

const CartItemsList: React.FC = () => {
  const navigate = useNavigate();
  const cart = useGetCartInfo();
  const cartList = cart.products.map((item, index) => (
    <CartItem cartItem={item} key={`${item.product.id}-${index}`} />
  ));

  const handleClick = () => {
    navigate(RouterPaths.SHOP);
  };

  return (
    <section className='cart-list'>
      <div className='cart-list__container ssh-container'>
        <div className='cart-list__row ssh-row'>
          {cart.count === 0 ? (
            <div className='cart-list__empty'>
              <ResponseMessage classes='sm:pt-0 md:pt-0'>
                There are no products in your cart.
              </ResponseMessage>
              <Button className='mx-auto' onClick={handleClick}>
                Go back shopping
              </Button>
            </div>
          ) : (
            <div className='cart-list__table'>
              <div className='cart-list__table-head'>
                <div className='cart-list__table-title'>
                  <span>Product</span>
                </div>
                <div className='cart-list__table-title table-title-price'>
                  <span>Price</span>
                </div>
                <div className='cart-list__table-title table-title-quantity'>
                  <span>Quantity</span>
                </div>
                <div className='cart-list__table-title table-title-total'>
                  <span>Total</span>
                </div>
              </div>
              <div className='cart-list__table-items'>{cartList}</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CartItemsList;
