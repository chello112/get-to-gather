import { configureStore } from "@reduxjs/toolkit";
import navModalReducer from "../features/modal/navModalSlice";
import authReducer from "../features/auth/authSlice";
import eventsReducer from "../features/event/eventSlice";

export const store = configureStore({
  reducer: {
    navModal: navModalReducer,
    auth: authReducer,
    events: eventsReducer,
  },
});
