import React from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import s from './ItemContact.module.css';
import PropTypes from 'prop-types';
import actions from 'redux/phonebook/phonebook-actions';

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

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(actions.myActionDeleteContact(id)),
});
export default connect(null, mapDispatchToProps)(ItemContact);
