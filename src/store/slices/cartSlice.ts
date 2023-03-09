import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { cartItemType, cartProductType } from '@Types/cartItem';
import _ from 'lodash';

const localStorageCart = [...JSON.parse(localStorage.getItem('cart') ?? '[]')];

const initialState: { cartItems: cartItemType[] } = {
  cartItems: localStorageCart,
};

const itemInCartFn = (
  state: { cartItems: cartItemType[] },
  product: cartProductType
) => {
  return state.cartItems.find((item) => _.isEqual(item.product, product));
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{ product: cartProductType; quantity: number }>
    ) => {
      const itemInCart = itemInCartFn(state, action.payload.product);

      if (itemInCart) {
        itemInCart.quantity += action.payload.quantity;
      } else {
        state.cartItems.push({
          product: action.payload.product,
          quantity: action.payload.quantity,
        });
      }
    },
    removeFromCart: (
      state,
      action: PayloadAction<{ product: cartProductType }>
    ) => {
      state.cartItems = state.cartItems.filter(
        (item) => !_.isEqual(item.product, action.payload.product)
      );
    },
    updateCartItemQuantity: (
      state,
      action: PayloadAction<{ product: cartProductType; quantity: number }>
    ) => {
      const cartItem = state.cartItems.find((item) =>
        _.isEqual(item.product, action.payload.product)
      );

      if (cartItem) {
        cartItem.quantity = action.payload.quantity;
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, updateCartItemQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
