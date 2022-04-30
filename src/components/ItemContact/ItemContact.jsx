import React from 'react';
import { useDispatch } from 'react-redux';
import s from './ItemContact.module.css';
import PropTypes from 'prop-types';
import actions from 'redux/phonebook/phonebook-actions';

const ItemContact = ({ contact }) => {
  const dispatch = useDispatch();
  const onDeleteContact = e =>
    dispatch(actions.myActionDeleteContact(e.target.id));
  return (
    <li className={s.item} id={contact.id}>
      <p className={s.text}>
        {contact.name}: {contact.number}
      </p>
      <button
        id={contact.id}
        type="button"
        onClick={onDeleteContact}
        className={s.btn}
      >
        Delete
      </button>
    </li>
  );
};
ItemContact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default ItemContact;
