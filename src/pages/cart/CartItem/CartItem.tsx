import { cartItemType } from '@Types/cartItem';
import ColorPill from '@Components/ui/ColorPill';
import { ReactComponent as Remove } from '@Assets/images/menu-xmark.svg';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  AppDispatch,
  RootState,
  removeFromCart,
  updateCartItemQuantity,
} from '@Store/index';
import ProductQuantity from '@Components/ui/ProductQuantity';
import { quantityLimits } from '@Utils/constants';
import _ from 'lodash';
import './CartItem.scss';

interface cartItemInterface {
  cartItem: cartItemType;
}

const CartItem: React.FC<cartItemInterface> = (props: cartItemInterface) => {
  const dispatch = useDispatch<AppDispatch>();
  const cart = useSelector((state: RootState) => state.cart);
  const totalPrice = props.cartItem.product.price * props.cartItem.quantity;

  const handleRemoveProduct = () => {
    if (
      cart.cartItems.length === 1 &&
      _.isEqual(cart.cartItems[0].product, props.cartItem.product)
    ) {
      localStorage.clear();
    }

    dispatch(removeFromCart({ product: props.cartItem.product }));
  };

  const handleUpdateQuantity = (amount: number) => {
    let updatedQuantity;
    if (props.cartItem.quantity + amount > quantityLimits.superiorLimit) {
      updatedQuantity = quantityLimits.superiorLimit;
    } else if (
      props.cartItem.quantity + amount <
      quantityLimits.inferiorLimit
    ) {
      updatedQuantity = quantityLimits.inferiorLimit;
    } else {
      updatedQuantity = props.cartItem.quantity + amount;
    }

    dispatch(
      updateCartItemQuantity({
        product: props.cartItem.product,
        quantity: updatedQuantity,
      })
    );
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart.cartItems));
  }, [cart]);

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
          <img src={props.cartItem.product.images[0]} alt='Product' />
        </div>
        <div className='cart-item__info-details'>
          <div className='cart-item__info-name'>
            {props.cartItem.product.name}
            <span className='cart-item__info-price'>
              - {props.cartItem.product.price} €
            </span>
          </div>
          <div className='cart-item__info-color'>
            <span>Colour:</span>
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

          <div className='cart-item__info-mobile-price'>
            {props.cartItem.product.price} €
          </div>
        </div>
      </div>
      <div className='cart-item__price'>{props.cartItem.product.price} €</div>
      <div className='cart-item__quantity'>
        <ProductQuantity
          className={
            props.cartItem.quantity === quantityLimits.inferiorLimit
              ? 'disable-subtract-quantity'
              : props.cartItem.quantity === quantityLimits.superiorLimit
              ? 'disable-add-quantity'
              : ''
          }
          quantity={props.cartItem.quantity}
          handleSubtractQuantity={() => handleUpdateQuantity(-1)}
          handleAddQuantity={() => handleUpdateQuantity(1)}
        />
      </div>
      <div className='cart-item__total'>{totalPrice} €</div>
      <button className='cart-item__remove' onClick={handleRemoveProduct}>
        <Remove />
      </button>
    </div>
  );
};

export default CartItem;
