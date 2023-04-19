import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
});

export const selectItems = (state) => state.app.items;

export const {} = appSlice.actions;
export default appSlice.reducer;
