import { combineReducers } from 'redux';
import { createReducer, createSlice } from '@reduxjs/toolkit';
import actions from './phonebook-actions';

const contactsReducer = createReducer([], {
  [actions.myActionAddContact]: (state, { payload }) => {
    return [...state, payload];
  },
  [actions.myActionDeleteContact]: (state, { payload }) => {
    const newContacts = state.filter(contact => contact.id !== payload);
    return [...newContacts];
  },
});

// const filterReducer = createReducer('', {
//   [actions.myActionFilterContact]: (_, { payload }) => payload,
// });
const initialStateFilter = '';

const filterSlice = createSlice({
  name: 'filterContact',
  initialState: initialStateFilter,
  reducers: {
    myActionFilterContact: (_, { payload }) => payload,
    reset: () => initialStateFilter,
  },
});

const phonebookReducer = combineReducers({
  contacts: contactsReducer,
  filterContact: filterSlice.reducer,
});
export const { myActionFilterContact, reset } = filterSlice.actions;
export default phonebookReducer;
