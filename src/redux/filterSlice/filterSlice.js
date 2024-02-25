import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: [],
  monitoring: false,
  extractData: false,
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    addFilter: (state, action) => {
      state.filters = [...state.filters, action.payload];
    },
    removeFilter: (state, action) => {
      state.filters = state.filters.filter((item) => item !== action.payload);
    },
    toggleMonitorState: (state) => {
      state.monitoring = !state.monitoring;
    },
    toggleExtractState: (state) => {
      state.extractData = !state.extractData;
    },
  },
});

export const {
  addFilter,
  removeFilter,
  toggleExtractState,
  toggleMonitorState,
} = filterSlice.actions;

export default filterSlice.reducer;
