import { configureStore } from "@reduxjs/toolkit";
import attractionsHandler from "./sliceAttractions";
import locationsHandler from "./sliceLocations"
import usersHandler from "./sliceUsers";

export const store = configureStore({
  reducer: {
    attractions: attractionsHandler,
    locations: locationsHandler,
    users: usersHandler
  },
});