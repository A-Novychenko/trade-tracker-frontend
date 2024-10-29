import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilterValue(state, action) {
      return action.payload;
    },
  },
});

export const { setFilterValue } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
