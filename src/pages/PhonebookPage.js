import React from 'react';
import { useDispatch } from 'react-redux';
import Form from 'components/Form/Form';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';
import Button from 'components/Button/Button';
import Container from 'components/Container/Container';
import { useLogoutUserMutation } from 'redux/auth/authApi';
import { loggedOut } from 'redux/auth/token-reduser';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const PhonebookPage = () => {
  const dispatchToken = useDispatch();
  const [
    logoutUser,
    { error: errorLogout, isError, isSuccess },
  ] = useLogoutUserMutation();

  const handleClickLogout = async () => {
    try {
      const data = await logoutUser().unwrap();
      dispatchToken(loggedOut());
    } catch (error) {
      console.log(error);
      toast.error(`Somthing wrong...`);
    }
  };

  return (
    <>
      <Container>
        <Button title="Logout" onClick={handleClickLogout} />
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
      <ToastContainer autoClose={2000} />
    </>
  );
};

export default PhonebookPage;
