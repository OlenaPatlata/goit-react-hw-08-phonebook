import actionsTypes from 'redux/phonebook/phonebook-types';

// Фабрика action (возвращает литерал объекта): один type, но разные payload

const myActionAddContact = contact => {
  return {
    type: actionsTypes.ADD,
    payload: contact,
  };
};

const myActionDeleteContact = id => ({
  type: actionsTypes.DELETE,
  payload: id,
});

const myActionFilterContact = filterContact => ({
  type: actionsTypes.FILTER,
  payload: filterContact,
});

const actions = {
  myActionAddContact,
  myActionDeleteContact,
  myActionFilterContact,
};
export default actions;
