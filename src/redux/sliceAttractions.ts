import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  attractions: [],
};
export const attractionsHandler = createSlice({
  name: "attractionState",
  initialState,
  reducers: {
    setAttractions: (state, action) => {
      state.attractions = action.payload;
    },
  },
});

export const getAttractions = (state) => state.attractions.attractions;

export const { setAttractions} =
  attractionsHandler.actions;

export default attractionsHandler.reducer;
