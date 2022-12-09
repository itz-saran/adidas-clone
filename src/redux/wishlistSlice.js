import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
  count: 0,
};

const wishlistSlice = createSlice({
  name: "wishlistSlice",
  initialState,
  reducers: {
    addToWishlist: (state, { payload }) => {
      const wishlistItem = state.wishlist.find(
        (item) => item.SKU === payload.SKU
      );
      if (!wishlistItem) state.wishlist.push(payload);
      else
        state.wishlist = state.wishlist.filter(
          (item) => item.SKU !== payload.SKU
        );
    },

    removeFromWishlist: (state, { payload }) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.SKU !== payload.SKU
      );
    },

    getCount: (state) => {
      let count = 0;
      state.wishlist.forEach((item) => count++);
      state.count = count;
    },
  },
});

export const { addToWishlist, removeFromWishlist, getCount } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
