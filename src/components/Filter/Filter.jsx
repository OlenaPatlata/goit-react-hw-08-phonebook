import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilterContact } from 'redux/phonebook/phonebook-selectors';
import s from './Filter.module.css';
// import actions from 'redux/phonebook/phonebook-actions';
import {
  myActionFilterContact,
  reset,
} from 'redux/phonebook/phonebook-reducer';

const Filter = () => {
  const filterContact = useSelector(getFilterContact);
  const dispatch = useDispatch();
  const onChangeFilter = e => dispatch(myActionFilterContact(e.target.value));

  return (
    <div className={s.wrapper}>
      <label className={s.label}>Find contacts by name</label>
      <input
        type="text"
        name="filter"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        className={s.input}
        value={filterContact}
        onChange={onChangeFilter}
      />
    </div>
  );
};

export default Filter;
