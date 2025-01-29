import OutstandingPackage from "@/components/menu/packages/OutstandardPackage";
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
    },
  },
});

export const { setOrderedMenu } = orderSlice.actions;
export default orderSlice.reducer;
