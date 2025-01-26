// store.js
import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./slice/MenuSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
  },
});

export default store;
