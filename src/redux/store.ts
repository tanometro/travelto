import { configureStore } from "@reduxjs/toolkit";
import attractionsHandler from "./sliceAttractions";
import locationsHandler from "./sliceLocations"

export const store = configureStore({
  reducer: {
    attractions: attractionsHandler,
    locations: locationsHandler
  },
});