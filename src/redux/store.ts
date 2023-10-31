import { configureStore } from "@reduxjs/toolkit";
import attractionsHandler from "./features/attractionsSlice";
import locationsHandler from "./features/locationsSlice"
import usersHandler from "./features/usersSlice";

export const store = configureStore({
  reducer: {
    attractions: attractionsHandler,
    locations: locationsHandler,
    users: usersHandler
  },
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch