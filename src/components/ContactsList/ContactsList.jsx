import React from 'react';
import s from './ContactsList.module.css';
import ItemContact from 'components/ItemContact/ItemContact';
import PropTypes from 'prop-types';

const ContactsList = props => {
  const { vizibleContacts, onDeleteContact } = props;

  return (
    <ul className={s.list}>
      {vizibleContacts?.length
        ? vizibleContacts.map(contact => (
            <ItemContact
              key={contact.id}
              contact={contact}
              onDeleteContact={onDeleteContact}
            />
          ))
        : ''}
    </ul>
  );
};
ContactsList.propTypes = {
  vizibleContacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
