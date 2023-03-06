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
import './CartItem.scss';

interface cartItemInterface {
  cartItem: cartItemType;
}

const CartItem: React.FC<cartItemInterface> = (props: cartItemInterface) => {
  const dispatch = useDispatch<AppDispatch>();
  const cart = useSelector((state: RootState) => state.cart);
  const totalPrice = props.cartItem.product.price * props.cartItem.quantity;

  const handleRemoveProduct = () => {
    dispatch(removeFromCart({ product: props.cartItem.product }));
  };

  const handleUpdateQuantity = (amount: number) => {
    dispatch(
      updateCartItemQuantity({
        product: props.cartItem.product,
        quantity:
          props.cartItem.quantity + amount > 0
            ? props.cartItem.quantity + amount
            : 1,
      })
    );
  };

  useEffect(() => {
    const localStorageCart = {
      ...cart.cartItems,
    };
    localStorage.setItem('cart', JSON.stringify(localStorageCart));
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
      <div className='cart-item__quantity'>
        <ProductQuantity
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
