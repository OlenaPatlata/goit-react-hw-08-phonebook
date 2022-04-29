import { combineReducers } from 'redux';
import actionsTypes from 'redux/phonebook/phonebook-types';
import { get } from 'serviсes/localStorage';

const initialStateContacts = get('contacts') || [];
const contactsReducer = (state = initialStateContacts, { type, payload }) => {
  console.log('~ ~ contactsReducer ~ state', state);

  switch (type) {
    case actionsTypes.ADD:
      return { ...state, payload };
    case actionsTypes.DELETE:
      return state.filter(contact => contact.id !== payload);
    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  console.log('~ ~ filterReducer ~ state ', state);
  switch (type) {
    case actionsTypes.FILTER:
      return payload;
    default:
      return state;
  }
};

const phonebookReducer = combineReducers({
  contacts: contactsReducer,
  filterContact: filterReducer,
});
export default phonebookReducer;
