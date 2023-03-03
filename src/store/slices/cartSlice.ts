import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { cartItemType } from '@Types/cartItem';

const localStorageCart = {
  ...JSON.parse(localStorage.getItem('cart') ?? '{}'),
};

const initialState: { cartItems: cartItemType[] } = {
  cartItems: Object.keys(localStorageCart).map((key) => {
    return localStorageCart[key];
  }),
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{ productId: string; quantity: number }>
    ) => {
      const itemInCart = state.cartItems.find(
        (item) => item.productId === action.payload.productId
      );
      if (itemInCart) {
        itemInCart.quantity += action.payload.quantity;
      } else {
        state.cartItems.push({
          productId: action.payload.productId,
          quantity: action.payload.quantity,
        });
      }
    },
    removeFromCart: (state, action: PayloadAction<{ productId: string }>) => {
      state.cartItems = [...state.cartItems].filter(
        (item) => item.productId !== action.payload.productId
      );
    },
    updateCartItemQuantity: (
      state,
      action: PayloadAction<{ productId: string; quantity: number }>
    ) => {
      const cartItem = state.cartItems.find(
        (item) => item.productId === action.payload.productId
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
