import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};
const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    updateData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { updateData } = dataSlice.actions;
export default dataSlice.reducer;
