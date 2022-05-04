import { combineReducers } from 'redux';
import { phonebookApi } from './phonebookApi';
import { createSlice } from '@reduxjs/toolkit';

const initialStateFilter = '';

const filterSlice = createSlice({
  name: 'filterContact',
  initialState: initialStateFilter,
  reducers: {
    myActionFilterContact: (_, { payload }) => payload,
    reset: () => initialStateFilter,
  },
});

const rootReducer = combineReducers({
  filterContact: filterSlice.reducer,
  [phonebookApi.reducerPath]: phonebookApi.reducer,
});
export const { myActionFilterContact, reset } = filterSlice.actions;
export default rootReducer;
