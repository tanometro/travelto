import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  locations: [],
};
export const locationsHandler = createSlice({
  name: "locationstate",
  initialState,
  reducers: {
    setLocations: (state, action) => {
      state.locations = action.payload;
    },
  },
});

export const getLocations = (state) => state.locations.locations;

export const { setLocations } =
  locationsHandler.actions;

export default locationsHandler.reducer;
