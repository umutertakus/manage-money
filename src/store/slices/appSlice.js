import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchAsyncStorageData = createAsyncThunk(
  'app/fetchAsyncStorageData',
  async () => {
    const value = await AsyncStorage.getItem('userItems');
    return value !== null ? JSON.parse(value) : null;
  }
);

const initialState = {
  items: [],
  status: 'idle',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addIncomeOrExpenditure: (state, action) => {
      state.items.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncStorageData.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchAsyncStorageData.fulfilled, (state, action) => {
        if (action.payload) {
          state.items = action.payload;
        }
      })
      .addCase(fetchAsyncStorageData.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});

export const selectItems = (state) => state.app.items;

export const { addIncomeOrExpenditure } = appSlice.actions;
export default appSlice.reducer;
