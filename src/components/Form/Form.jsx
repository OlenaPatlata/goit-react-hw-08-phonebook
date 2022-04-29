import React, { useReducer } from 'react';
import { connect } from 'react-redux';
import s from './Form.module.css';
import shortid from 'shortid';
import PropTypes from 'prop-types';

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

const Form = ({ onSubmit }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  const handleChange = event => {
    const { name, value } = event.target;
    dispatch({ type: name, payload: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(state);
    dispatch({ type: 'reset' });
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

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
