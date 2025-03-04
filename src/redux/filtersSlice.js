import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    changeFilter: (state, action) => action.payload,
  },
});

export const { changeFilter } = slice.actions;
export default slice.reducer;
