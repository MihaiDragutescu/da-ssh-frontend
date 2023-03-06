import { cartItemType } from '@Types/cartItem';
import ColorPill from '@Components/ui/ColorPill';
import { ReactComponent as Remove } from '@Assets/images/menu-xmark.svg';
import { useEffect } from 'react';
import './CartItem.scss';

interface cartItemInterface {
  cartItem: cartItemType;
}

const CartItem: React.FC<cartItemInterface> = (props: cartItemInterface) => {
  const totalPrice = props.cartItem.product.price * props.cartItem.quantity;

  useEffect(() => {
    const colorPills = document.querySelectorAll(
      '.cart-item__info-color .ssh-color-pill button'
    );

    [...colorPills].map(
      (colorPill) => ((colorPill as HTMLElement).tabIndex = -1)
    );
  }, []);

  return (
    <div className='cart-item'>
      <div className='cart-item__info'>
        <div className='cart-item__info-image'>
          <img src={props.cartItem.product.images[0]} alt='product' />
        </div>
        <div className='cart-item__info-details'>
          <div className='cart-item__info-name'>
            {props.cartItem.product.name}
          </div>
          <div className='cart-item__info-color'>
            <span>Color:</span>
            <ColorPill color={props.cartItem.product.color} />
          </div>
          <div className='cart-item__info-brand'>
            <span>Brand:</span>
            {props.cartItem.product.brand}
          </div>
          {props.cartItem.product.size && (
            <div className='cart-item__info-size'>
              <span>Size:</span>
              {props.cartItem.product.size}
            </div>
          )}
        </div>
      </div>
      <div className='cart-item__price'>{props.cartItem.product.price} €</div>
      <div className='cart-item__quantity'>{props.cartItem.quantity}</div>
      <div className='cart-item__total'>
        {totalPrice} €
        <button className='cart-item__remove'>
          <Remove />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
