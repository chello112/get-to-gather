import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const navModalSlice = createSlice({
  name: "navModal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = navModalSlice.actions;

export default navModalSlice.reducer;
