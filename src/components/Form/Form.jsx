import React, { useReducer } from 'react';
import s from './Form.module.css';
import shortid from 'shortid';
import {
  useFetchContactsQuery,
  useAddContactMutation,
} from 'redux/phonebook/phonebookApi';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const initialState = {
  name: '',
  phone: '',
};
const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'name':
      return { ...state, name: action.payload };
    case 'phone':
      return { ...state, phone: action.payload };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

const Form = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const nameInputId = shortid.generate();
  const phoneInputId = shortid.generate();

  const [addContact, { isLoading, isError }] = useAddContactMutation();

  const { data: contacts } = useFetchContactsQuery('', {
    refetchOnFocus: true,
  });

  const handleChange = event => {
    const { name, value } = event.target;
    dispatch({ type: name, payload: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(state);
    dispatch({ type: 'reset' });
  };

  const onSubmit = state => {
    if (contacts === [] || contacts === undefined) {
      addContact(state);
      return;
    }
    const normalizedName = state.name
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
    const normalizedPhone = state.phone.split('-').join('');
    const ableToAddPhone = contacts.some(
      contact => contact.phone.split('-').join('') === normalizedPhone
    );
    if (ableToAddName || ableToAddPhone) {
      toast.error(
        `${ableToAddName ? state.name : state.phone} is already in contacts`
      );
      return;
    }
    addContact(state);
  };

  return (
    <>
      <h1 className={s.title}>Phonebook</h1>
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
        <label htmlFor={phoneInputId} className={s.label}>
          Phone number
        </label>
        <input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={state.phone}
          onChange={handleChange}
          id={phoneInputId}
          className={s.input}
        />
        <button type="submit" className={s.btn}>
          Add contact
        </button>
      </form>
      <ToastContainer autoClose={2000} />
    </>
  );
};

export default Form;
