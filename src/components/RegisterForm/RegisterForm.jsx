import React, { useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import s from './RegisterForm.module.css';
import shortid from 'shortid';
import { useAddUserMutation } from 'redux/auth/authApi';
import { myActionToken, loggedOn, loggedOut } from 'redux/auth/token-reduser';
import { getIsLogged, getToken } from 'redux/auth/token-selectors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Button from 'components/Button/Button';

const initialState = {
  name: '',
  email: '',
  password: '',
};
const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'name':
      return { ...state, name: action.payload };
    case 'email':
      return { ...state, email: action.payload };
    case 'password':
      return { ...state, password: action.payload };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

const RegisterForm = () => {
  const [state, dispatch] = useReducer(registerReducer, initialState);
  const nameInputId = shortid.generate();
  const emailInputId = shortid.generate();
  const passwordInputId = shortid.generate();
  const navigate = useNavigate();
  const [
    addUser,
    { data, isLoading: isLoadingUser, isError: isErrorUser },
  ] = useAddUserMutation();

  const dispatchToken = useDispatch();

  // записує в локальний стейт и`мя, пошту та пароль
  const handleChange = event => {
    const { name, value } = event.target;
    dispatch({ type: name, payload: value });
  };

  // при натискання на кнопку локальний стейт передається як аргумент до функції addUser, форма очищується
  const handleSubmit = e => {
    e.preventDefault();
    addUser(state);
    // const { token, user } = data;
    dispatchToken(myActionToken(data));

    dispatch({ type: 'reset' });
  };

  // const handleSubmit = async data => {
  //   try {
  //     const response = await addUser(state);
  //     console.log(response);
  //     dispatchToken(myActionToken(response));
  //     dispatchToken(loggedOn());
  //     dispatch({ type: 'reset' });
  //     navigate('/phonebook');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      <h1 className={s.title}>Register</h1>
      <form onSubmit={handleSubmit} className={s.wrapper}>
        <label htmlFor={nameInputId} className={s.label}>
          Name
        </label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={state.name}
          onChange={handleChange}
          id={nameInputId}
          className={s.input}
        />

        <label htmlFor={emailInputId} className={s.label}>
          Email
        </label>
        <input
          type="email"
          name="email"
          pattern="([A-zА-я])+([0-9\-_\+\.])*([A-zА-я0-9\-_\+\.])*@([A-zА-я])+([0-9\-_\+\.])*([A-zА-я0-9\-_\+\.])*[\.]([A-zА-я])+"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={state.email}
          onChange={handleChange}
          id={emailInputId}
          className={s.input}
        />
        <label htmlFor={passwordInputId} className={s.label}>
          Password
        </label>
        <input
          type="text"
          name="password"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={state.password}
          onChange={handleChange}
          id={passwordInputId}
          className={s.input}
        />
        <div className={s.btn__wrapper}>
          <Button title="Register" type="submit" />
        </div>
      </form>

      <ToastContainer autoClose={2000} />
    </>
  );
};

export default RegisterForm;
