import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getVisibleContacts } from 'redux/phonebook/phonebook-selectors';

import s from './ContactsList.module.css';
import { useLazyFetchContactsQuery } from 'redux/auth/authApi';

import ItemContact from 'components/ItemContact/ItemContact';
import Loader from 'components/Loader/Loader';
import { getIsLogged } from 'redux/auth/token-selectors';

const ContactsList = () => {
  const isLogged = useSelector(getIsLogged);
  // const [
  //   fetchContacts,
  //   { data, error, isError, isLoading, isFetching },
  // ] = useLazyFetchContactsQuery(null, { skip: !isLogged });
  const [
    fetchContacts,
    { data, error, isError, isLoading, isFetching },
  ] = useLazyFetchContactsQuery();

  useEffect(() => {
    if (isLogged) {
      fetchContacts();
    }
  }, [isLogged]);

  console.log('data', data);
  console.log('isError', isError);
  console.log('error', error);
  console.log('isLoading', isLoading);
  console.log('isFetching', isFetching);

  const contacts = useSelector(state => getVisibleContacts(state, data));
  console.log(contacts);

  return (
    <>
      {isLoading && <Loader />}
      {isError && error?.status !== 404 && <p>Somthing wrong</p>}
      {error?.status === 404 ? (
        <p>There are no contacts in the phonebook</p>
      ) : (
        <ul className={s.list}>
          {contacts?.length > 0
            ? contacts.map(contact => (
                <ItemContact key={contact.id} contact={contact} />
              ))
            : ''}
        </ul>
      )}
    </>
  );
};

export default ContactsList;
