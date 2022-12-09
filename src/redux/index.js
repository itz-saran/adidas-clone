import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import cartSlice from "./cartSlice";
import wishlistSlice from "./wishlistSlice";
import homeSlice from "./homeSlice";
import productSlice from "./productSlice";
import carouselSlice from "./carouselSlice";

const combinedReducers = combineReducers({
  cart: cartSlice,
  wishlist: wishlistSlice,
  home: homeSlice,
  product: productSlice,
  carousels: carouselSlice,
});

const persistConfig = {
  key: "cart",
  storage,
  version: 1,
  stateReconciler: autoMergeLevel2,
  whitelist: ["cart", "wishlist"],
};

const persistedReducer = persistReducer(persistConfig, combinedReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REGISTER, REHYDRATE, PERSIST, PURGE, PAUSE],
      },
    }),
});

export const persistor = persistStore(store);
