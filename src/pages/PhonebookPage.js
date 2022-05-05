import React from 'react';
import { useHistory } from 'react-router-dom';
import Form from 'components/Form/Form';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';
import Button from 'components/Button/Button';

const PhonebookPage = () => {
  const history = useHistory();

  const handleClickBack = () => {
    history.push('/');
  };
  return (
    <>
      <Button title="Go back home" onClick={handleClickBack} />
      <Form />

      <Filter />
      <ContactsList />
    </>
  );
};

export default PhonebookPage;
