import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    ToggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});

export const { ToggleGptSearchView } = searchSlice.actions;
export default searchSlice.reducer;
