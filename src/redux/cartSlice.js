import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  count: 0,
  total: 0,
  delivery: 0,
  discountPrice: 0,
  billAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const cartItem = state.cart.filter(
        (item) =>
          item.product.SKU === payload.product.SKU && item.size === payload.size
      );
      if (cartItem.length > 0) {
        cartItem[0].qty += payload.qty;
      } else state.cart.push(payload);
    },
    removeFromCart: (state, { payload }) => {
      console.log(payload);

      state.cart = state.cart.filter(
        (cartItem) =>
          cartItem.product.SKU !== payload.product.SKU ||
          (cartItem.product.SKU === payload.product.SKU &&
            cartItem.size !== payload.size)
      );
    },
    changeQuantity: (state, { payload }) => {
      const cartItem = state.cart.filter(
        (item) =>
          item.product.SKU === payload.product.SKU && item.size === payload.size
      );
      if (cartItem.length > 0) {
        cartItem[0].qty = payload.qty;
      }
    },
    clearCart: (state) => {
      return initialState;
    },
    calculateTotals: (state) => {
      let total = 0;
      let count = 0;
      let discountPrice = 0;
      // {qty, size, product:{price, discount}}
      state.cart.forEach(({ qty, product: { price, discount } }) => {
        count += qty;
        total += price * qty;
        discountPrice += price * (discount / 100) * qty;
      });
      state.count = count;
      state.total = total;
      state.delivery = total > 1000 ? 0 : 50;
      state.discountPrice = discountPrice;
      state.billAmount = total - discountPrice + state.delivery;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  calculateTotals,
  changeQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
