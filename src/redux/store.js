import { combineReducers, configureStore } from '@reduxjs/toolkit';
import dataReducer from './dataSlice/dataSlice';
import filterReducer from './filterSlice/filterSlice';

const rootReducer = combineReducers({
  data: dataReducer,
  filters: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export default store;
