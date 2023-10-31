import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  onEditUser: [],
};
export const usersHandler = createSlice({
  name: "usersState",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setOnEditUser: (state, action) => {
      state.onEditUser = action.payload;
    }
  },
});

export const getUsers = (state) => state.users.users;
export const getOnEditUser = (state) => state.users.onEditUser

export const { setUsers, setOnEditUser } = usersHandler.actions;

export default usersHandler.reducer;
