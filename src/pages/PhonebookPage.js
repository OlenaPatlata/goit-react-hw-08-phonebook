import React from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'components/Form/Form';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';
import Button from 'components/Button/Button';
import Container from 'components/Container/Container';

const PhonebookPage = () => {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate('/');
  };
  return (
    <>
      <Container>
        <Button title="Go back home" onClick={handleClickBack} />
      </Container>
      <Container>
        <Form />
      </Container>
      <Container>
        <Filter />
      </Container>
      <Container>
        <ContactsList />
      </Container>
    </>
  );
};

export default PhonebookPage;
