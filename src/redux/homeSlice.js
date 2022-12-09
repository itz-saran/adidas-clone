import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchUrl } from "../assets/helpers/helper";

const initialState = {
  carousels: {},
  category: [],
  isLoading: true,
};

export const getHomeData = createAsyncThunk("home/getHomeData", async () => {
  try {
    const res = await fetchUrl("home", "GET");
    return res;
  } catch (err) {
    console.log(err);
  }
});

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHomeData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getHomeData.fulfilled, (state, { payload }) => {
        state.carousels = payload.carousels;
        state.category = payload.category;
        state.isLoading = false;
      })
      .addCase(getHomeData.rejected, (state) => {
        state.isLoading = true;
      });
  },
});

export default homeSlice.reducer;
