// store.js
import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./slice/MenuSlice";
import eventReducer from "./slice/EventSlice";
import orderReducer from "./slice/OrderSlice";
export const store = configureStore({
  reducer: {
    menu: menuReducer,
    event: eventReducer,
    order: orderReducer,
  },
});

export default store;
