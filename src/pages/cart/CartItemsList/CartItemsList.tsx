import CartItem from '../CartItem/CartItem';
import useGetCartInfo from '@Hooks/useGetCartInfo';
import './CartItemsList.scss';

const CartItemsList: React.FC = () => {
  const cart = useGetCartInfo();
  const cartList = cart.products.map((item) => (
    <CartItem cartItem={item} key={item.product.id} />
  ));
  return (
    <section className='cart-list'>
      <div className='cart-list__container ssh-container'>
        <div className='cart-list__row ssh-row'>
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
        </div>
      </div>
    </section>
  );
};

export default CartItemsList;
