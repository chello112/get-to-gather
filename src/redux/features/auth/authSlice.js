import { createSlice } from "@reduxjs/toolkit";

//Get user from localStorage
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    login: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});

export const { register, login, logout } = authSlice.actions;

export default authSlice.reducer;
