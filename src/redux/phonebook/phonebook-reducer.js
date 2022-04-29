import { combineReducers } from 'redux';
import actionsTypes from 'redux/phonebook/phonebook-types';
import { get, save } from 'serviсes/localStorage';

const initialStateContacts = get('contacts') || [];
const contactsReducer = (state = initialStateContacts, { type, payload }) => {
  switch (type) {
    case actionsTypes.ADD:
      const contacts = [...state, payload];
      save('contacts', contacts);
      return [...state, payload];

    case actionsTypes.DELETE:
      const newContacts = state.filter(
        contact => contact.id !== payload.target.id
      );
      save('contacts', newContacts);
      return [...newContacts];

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case actionsTypes.FILTER:
      return payload.target.value;
    default:
      return state;
  }
};

const phonebookReducer = combineReducers({
  contacts: contactsReducer,
  filterContact: filterReducer,
});
export default phonebookReducer;
