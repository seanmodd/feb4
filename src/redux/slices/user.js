import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;
const initialState = { value: { name: "", age: 0, email: "" } };
const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = initialState.value;
    },
    // action => action handler
    userAdded: (state, action) => {
      state.push({
        id: ++lastId,
        name: action.payload.name,
      });
    },
  },
});

export const { login, logout, userAdded } = slice.actions;

export default slice.reducer;
