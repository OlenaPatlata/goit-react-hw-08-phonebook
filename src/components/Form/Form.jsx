import React, { useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/phonebook/phonebook-selectors';
import s from './Form.module.css';
import shortid from 'shortid';
import actions from 'redux/phonebook/phonebook-actions';

const initialState = {
  name: '',
  number: '',
};
const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'name':
      return { ...state, name: action.payload };
    case 'number':
      return { ...state, number: action.payload };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

const Form = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  const contacts = useSelector(getContacts);
  const dispatchAdd = useDispatch();
  const addContact = data => dispatchAdd(actions.myActionAddContact(data));
  const handleChange = event => {
    const { name, value } = event.target;
    dispatch({ type: name, payload: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(state);
    dispatch({ type: 'reset' });
  };

  const onSubmit = data => {
    const normalizedName = data.name
      .toLocaleLowerCase()
      .split(' ')
      .join('');
    const ableToAddName = contacts.some(
      contact =>
        contact.name
          .toLocaleLowerCase()
          .split(' ')
          .join('') === normalizedName
    );
    const normalizedNumber = data.number.split('-').join('');
    const ableToAddNumber = contacts.some(
      contact => contact.number.split('-').join('') === normalizedNumber
    );
    if (ableToAddName || ableToAddNumber) {
      alert(
        `${ableToAddName ? data.name : data.number} is already in contacts`
      );
      return;
    }
    addContact(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={s.wrapper}>
        <label htmlFor={nameInputId} className={s.label}>
          Name
        </label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={state.name}
          onChange={handleChange}
          id={nameInputId}
          className={s.input}
        />
        <label htmlFor={numberInputId} className={s.label}>
          Number
        </label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={state.number}
          onChange={handleChange}
          id={numberInputId}
          className={s.input}
        />
        <button type="submit" className={s.btn}>
          Add contact
        </button>
      </form>
    </>
  );
};

export default Form;
