import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderedMenu: {
    teaPackage: null,
    normalPackage: null,
    standardPackage: null,
    OutstandingPackage: null,
  },
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrderedMenu: (state, action) => {
      state.orderedMenu = { ...state.orderedMenu, ...action.payload };
      console.log("Updated Ordered Menu:", state.orderedMenu); // Debugging log
    },
  },
});

export const { setOrderedMenu } = orderSlice.actions;
export default orderSlice.reducer;
