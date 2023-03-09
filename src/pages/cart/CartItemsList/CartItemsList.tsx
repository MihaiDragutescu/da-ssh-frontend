import CartItem from '../CartItem/CartItem';
import Button from '@Components/ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch, clearCart } from '@Store/index';
import './CartItemsList.scss';

const CartItemsList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cart = useSelector((state: RootState) => state.cart);
  const cartList = cart.cartItems.map((item, index) => (
    <CartItem cartItem={item} key={`${item.product.id}-${index}`} />
  ));

  const handleClearCart = () => {
    dispatch(clearCart());
    localStorage.clear();
  };

  return (
    <section className='cart-list'>
      <div className='cart-list__container ssh-container'>
        <div className='cart-list__row ssh-row'>
          <div className='cart-list__table'>
            <Button className='cart-list__reset' onClick={handleClearCart}>
              Empty cart
            </Button>
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
        </div>
      </div>
    </section>
  );
};

export default CartItemsList;
