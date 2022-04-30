import React from 'react';
import { useSelector } from 'react-redux';
import {
  getContacts,
  getFilterContact,
} from 'redux/phonebook/phonebook-selectors';
import s from './ContactsList.module.css';
import ItemContact from 'components/ItemContact/ItemContact';

const ContactsList = () => {
  const getVisibleContacts = (allContacts, filterContact) => {
    if (!filterContact) {
      return allContacts;
    }
    const normWord = filterContact.toLocaleLowerCase().trim();
    return [...allContacts].filter(contact =>
      contact.name.toLocaleLowerCase().includes(normWord)
    );
  };
  const contacts = useSelector(state =>
    getVisibleContacts(state.phonebook.contacts, state.phonebook.filterContact)
  );

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
