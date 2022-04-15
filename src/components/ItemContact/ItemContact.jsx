import React from 'react';
import s from './ItemContact.module.css';
import PropTypes from 'prop-types';

const ItemContact = props => {
  const { contact, onDeleteContact } = props;
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
  onDeleteContact: PropTypes.func.isRequired,
};

export default ItemContact;
