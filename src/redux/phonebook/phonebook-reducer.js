import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
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

const filterReducer = createReducer('', {
  [actions.myActionFilterContact]: (_, { payload }) => payload,
});

const phonebookReducer = combineReducers({
  contacts: contactsReducer,
  filterContact: filterReducer,
});

export default phonebookReducer;
