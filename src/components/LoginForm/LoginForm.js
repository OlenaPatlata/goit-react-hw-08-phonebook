import React, { useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import s from './LoginForm.module.css';
import shortid from 'shortid';
import { useLoginUserMutation } from 'redux/auth/authApi';
import { myActionToken, loggedOn, loggedOut } from 'redux/auth/token-reduser';
import { getIsLogged, getToken } from 'redux/auth/token-selectors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Button from 'components/Button/Button';

const initialState = {
  email: '',
  password: '',
};
const registerReducer = (state = initialState, action) => {
  switch (action.type) {
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

const LoginForm = () => {
  const [state, dispatch] = useReducer(registerReducer, initialState);

  const emailInputId = shortid.generate();
  const passwordInputId = shortid.generate();
  const navigate = useNavigate();
  const [
    loginUser,
    { data, isLoading: isLoadingULoginUser, isError: isErrorLoginUser },
  ] = useLoginUserMutation();

  const dispatchToken = useDispatch();

  // записує в локальний стейт и`мя, пошту та пароль
  const handleChange = event => {
    const { name, value } = event.target;
    dispatch({ type: name, payload: value });
  };

  // при натискання на кнопку локальний стейт передається як аргумент до функції addUser, форма очищується
  const handleSubmit = e => {
    e.preventDefault();
    loginUser(state);
    dispatchToken(myActionToken(data));
    dispatch({ type: 'reset' });
  };

  // const handleSubmit = async data => {
  //   try {
  //     // e.preventDefault();
  //     const response = await loginUser(state);
  //     console.log(response);
  //     //   dispatchToken(myActionToken(response));
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
          <Button title="Login" type="submit" />
        </div>
      </form>

      <ToastContainer autoClose={2000} />
    </>
  );
};

export default LoginForm;
