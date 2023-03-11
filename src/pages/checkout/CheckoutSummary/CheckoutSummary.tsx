import useGetCartInfo from '@Hooks/useGetCartInfo';
import { taxPercentage } from '@Utils/constants';
import './CheckoutSummary.scss';

const CheckoutSummary: React.FC = () => {
  const cart = useGetCartInfo();
  const taxValue = taxPercentage * cart.total;
  const totalPrice = taxValue + cart.total;

  const cartItems = cart.products.map((item, index) => {
    return (
      <li
        className='checkout-summary__item'
        key={`${item.product.id}-${index}`}
      >
        <div className='checkout-summary__item-info'>
          <span className='checkout-summary__item-name'>
            {item.product.name}
          </span>
          <span className='checkout-summary__item-quantity'>
            x {item.quantity}
          </span>
        </div>
        <div className='checkout-summary__item-price'>
          {item.product.price * item.quantity} €
        </div>
      </li>
    );
  });

  return (
    <div className='checkout-summary'>
      <div className='checkout-summary__title'>
        <h2>Order Summary</h2>
      </div>
      <ul className='checkout-summary__items'>{cartItems}</ul>
      <div className='checkout-summary__subtotal'>
        <span>Subtotal:</span>
        <span>{cart.total} €</span>
      </div>
      <div className='checkout-summary__tax'>
        <span>Tax:</span>
        <span>{taxValue} €</span>
      </div>
      <div className='checkout-summary__total'>
        <span>Total:</span>
        <span>{totalPrice} €</span>
      </div>
    </div>
  );
};

export default CheckoutSummary;
