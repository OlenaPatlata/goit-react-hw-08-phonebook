import React from 'react';
import { useDispatch } from 'react-redux';
import s from './ItemContact.module.css';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/phonebook/phonebookApi';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { reset } from 'redux/phonebook/phonebook-reducer';

const ItemContact = ({ contact }) => {
  const dispatch = useDispatch();
  const onResetFilter = () => dispatch(reset());
  const [deleteContact] = useDeleteContactMutation();
  const onDeleteContact = e => {
    deleteContact(e.target.id);
    toast(`Contact ${contact.name} deleted`, { className: 'foo' });
    onResetFilter();
  };
  return (
    <li className={s.item} id={contact.id}>
      <p className={s.text}>
        {contact.name}: {contact.phone}
      </p>
      <button
        id={contact.id}
        type="button"
        onClick={onDeleteContact}
        className={s.btn}
      >
        Delete
      </button>
      <ToastContainer autoClose={2000} />
    </li>
  );
};
ItemContact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
};

export default ItemContact;
