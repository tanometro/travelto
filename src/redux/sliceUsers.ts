import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};
export const usersHandler = createSlice({
  name: "usersState",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const getUsers = (state) => state.users.users;

export const { setUsers } = usersHandler.actions;

export default usersHandler.reducer;
