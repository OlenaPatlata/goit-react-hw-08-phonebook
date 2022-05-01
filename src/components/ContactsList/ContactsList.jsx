import React from 'react';
import { useSelector } from 'react-redux';
import { getVisibleContacts } from 'redux/phonebook/phonebook-selectors';
import s from './ContactsList.module.css';
import ItemContact from 'components/ItemContact/ItemContact';

const ContactsList = () => {
  const contacts = useSelector(getVisibleContacts);

  return (
    <ul className={s.list}>
      {contacts?.length
        ? contacts.map(contact => (
            <ItemContact key={contact.id} contact={contact} />
          ))
        : ''}
    </ul>
  );
};

export default ContactsList;
