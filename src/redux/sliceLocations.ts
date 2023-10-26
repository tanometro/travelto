import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  locations: [],
  renderLocations: [],
  onEditLocation: [],
};
export const locationsHandler = createSlice({
  name: "locationstate",
  initialState,
  reducers: {
    setLocations: (state, action) => {
      state.locations = action.payload;
    },
    setRenderLocations: (state, action) => {
      state.renderLocations = action.payload;
    },
    setOnEditLocation: (state, action) => {
      state.onEditLocation = action.payload;
    },
  },
});

export const getLocations = (state) => state.locations.locations;
export const getRenderlocations = (state) =>
  state.locations.renderLocations;
export const getOnEditLocation = (state) =>
  state.locations.onEditLocation;

export const { setLocations, setRenderLocations, setOnEditLocation } =
  locationsHandler.actions;

export default locationsHandler.reducer;
