import { createSlice } from "@reduxjs/toolkit";
import { EventsData } from "../../../assets/mocks/mock-data";

const initialState = { events: EventsData };

const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {},
});

export default eventSlice.reducer;
