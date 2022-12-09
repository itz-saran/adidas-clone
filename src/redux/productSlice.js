import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUrl } from "../assets/helpers/helper";

const initialState = {
  product: {},
  currentShowcase: {},
  selectedSize: null,
  stock: null,
  isLoading: true,
};

export const getProduct = createAsyncThunk(
  "product/getProduct",
  async (SKU) => {
    try {
      const product = await fetchUrl("forum-low-shoes", "GET");
      const currentShowcase = await fetchUrl(`all/${SKU}`, "GET");
      return {
        product,
        currentShowcase,
      };
    } catch (err) {
      console.log(err);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    selectSize: (state, data) => {
      state.selectedSize = data.payload.size;
      state.stock = data.payload.stock;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProduct.fulfilled, (state, data) => {
        state.product = data.payload.product;
        state.currentShowcase = data.payload.currentShowcase;
        state.isLoading = false;
      })
      .addCase(getProduct.rejected, (state) => {
        state.isLoading = true;
      });
  },
});

export const { selectSize } = productSlice.actions;
export default productSlice.reducer;
