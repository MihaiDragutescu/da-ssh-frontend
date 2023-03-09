import useGetCartInfo from '@Hooks/useGetCartInfo';
import { taxPercentage } from '@Utils/constants';
import Button from '@Components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { RouterPaths } from '@Types/routerPaths';
import './CartSummary.scss';

const CartSummary: React.FC = () => {
  const navigate = useNavigate();
  const cart = useGetCartInfo();
  const taxValue = taxPercentage * cart.total;
  const totalPrice = taxValue + cart.total;

  const handleClick = () => {
    navigate(`${RouterPaths.CART}/${RouterPaths.CHECKOUT}`);
  };

  return (
    <section className='cart-summary'>
      <div className='cart-summary__container ssh-container'>
        <div className='cart-summary__row ssh-row'>
          <div className='cart-summary__col'>
            <div className='cart-summary__subtotal'>
              <span>Subtotal:</span>
              <span>{cart.total} €</span>
            </div>
            <div className='cart-summary__tax'>
              <span>Tax:</span>
              <span>{taxValue} €</span>
            </div>
            <div className='cart-summary__total'>
              <span>Total:</span>
              <span>{totalPrice} €</span>
            </div>
          </div>
          <div className='cart-summary__col'>
            <Button onClick={handleClick}>Checkout</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartSummary;
