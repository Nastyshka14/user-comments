import { createSlice } from "@reduxjs/toolkit";
import { fetchUsersAsync, fetchUserAsync } from "./usersAPI";
import { UsersState } from "../../domain/types";
import { RootState } from "../index";

const initialState: UsersState = {
  data: [],
  status: "idle",
  error: null,
  selectedUser: null,
  searchItem: "",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setSearchItem: (state, action) => {
      state.searchItem = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsersAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchUsersAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch users";
      })
      .addCase(fetchUserAsync.pending, (state) => {
        state.status = "loading";
        state.selectedUser = null;
      })
      .addCase(fetchUserAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedUser = action.payload;
      })
      .addCase(fetchUserAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch user";
      });
  },
});

export const selectUsers = (state: RootState) => state.users.data;
export const selectUser = (state: RootState) => state.users.selectedUser;
export const { setSearchItem } = usersSlice.actions;

export default usersSlice.reducer;
