import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Form from 'components/Form/Form';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';
import Button from 'components/Button/Button';
import Container from 'components/Container/Container';
import { useLogoutUserMutation } from 'redux/auth/authApi';
import { loggedOut } from 'redux/auth/token-reduser';

const PhonebookPage = () => {
  const navigate = useNavigate();
  const dispatchToken = useDispatch();
  const [logoutUser] = useLogoutUserMutation();

  const handleClickBack = () => {
    logoutUser();
    dispatchToken(loggedOut());
    // navigate('/');
  };
  return (
    <>
      <Container>
        <Button title="Logout" onClick={handleClickBack} />
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
