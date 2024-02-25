import { combineReducers, configureStore } from '@reduxjs/toolkit';
import dataReducer from './dataSlice/dataSlice';

const rootReducer = combineReducers({
  data: dataReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export default store;
