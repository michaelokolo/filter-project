import { createSlice } from '@reduxjs/toolkit';
import jsonData from '../data/automations.json';

const { items } = jsonData.data.oneClickAutomations;

const initialState = {
  data: items,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
});

//remeber to come and export the actions

export default dataSlice.reducer;
