import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  attractions: [],
  renderAttractions: [],
  onEditAttraction: [],
};
export const attractionsHandler = createSlice({
  name: "attractionState",
  initialState,
  reducers: {
    setAttractions: (state, action) => {
      state.attractions = action.payload;
    },
    setRenderAttractions: (state, action) => {
      state.renderAttractions = action.payload;
    },
    setOnEditAttraction: (state, action) => {
      state.onEditAttraction = action.payload;
    },
  },
});

export const getAttractions = (state) => state.attractions.attractions;
export const getRenderAttractions = (state) =>
  state.attractions.renderAttractions;
export const getOnEditAttraction = (state) =>
  state.attractions.onEditAttraction;

export const { setAttractions, setRenderAttractions, setOnEditAttraction } =
  attractionsHandler.actions;

export default attractionsHandler.reducer;
