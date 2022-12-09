import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUrl } from "../assets/helpers/helper";

const initialState = {
  carousels: [],
  isLoading: true,
};

export const getCarousels = createAsyncThunk(
  "carousel/getCarousels",
  async () => {
    try {
      const carousels = await fetchUrl("carousels", "GET");
      return carousels;
    } catch (err) {
      console.log(err);
    }
  }
);

const carouselSlice = createSlice({
  name: "carousel",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCarousels.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCarousels.fulfilled, (state, data) => {
        state.carousels = data.payload;
        state.isLoading = false;
      })
      .addCase(getCarousels.rejected, (state) => {
        state.isLoading = true;
      });
  },
});

export default carouselSlice.reducer;
