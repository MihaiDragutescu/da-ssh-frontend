import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductType } from '@Types/product';
import { cartItemType } from '@Types/cartItem';

const initialState: { cartItems: cartItemType[] } = { cartItems: [] };

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{ product: ProductType; quantity: number }>
    ) => {
      const itemInCart = state.cartItems.find(
        (item) => item.product.id === action.payload.product.id
      );
      if (itemInCart) {
        itemInCart.quantity += action.payload.quantity;
      } else {
        state.cartItems.push({
          product: action.payload.product,
          quantity: action.payload.quantity,
        });
      }
    },
    removeFromCart: (state, action: PayloadAction<{ productId: string }>) => {
      state.cartItems = [...state.cartItems].filter(
        (item) => item.product.id !== action.payload.productId
      );
    },
    updateCartItemQuantity: (
      state,
      action: PayloadAction<{ productId: string; quantity: number }>
    ) => {
      const cartItem = state.cartItems.find(
        (item) => item.product.id === action.payload.productId
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
