import React from 'react';
import Form from 'components/Form/Form';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';
import s from './App.module.css';

const App = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Phonebook</h1>
      <Form />
      <h1 className={s.title}>Contacts</h1>
      <Filter />
      <ContactsList />
    </div>
  );
};

export default App;
