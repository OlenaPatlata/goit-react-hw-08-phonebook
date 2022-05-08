import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from 'components/Button/Button';
import s from './Navigation.module.css';
import { getIsLogged } from 'redux/auth/token-selectors';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const [isAuth, setIsAuth] = useState(false);
  const flag = useSelector(getIsLogged);
  return (
    <>
      {flag ? (
        <nav className={s.wrapper}>
          <Link to="/" className={s.current}>
            HOME
          </Link>
          <Link to="login" className={s.current}>
            Login
          </Link>
          <Link to="phonebook" className={s.current}>
            Phonebook
          </Link>
          <Button title="Logout" type="button" onClick={() => {}} />
        </nav>
      ) : (
        <nav>
          <Link to="/" className={s.current}>
            HOME
          </Link>
          <Link to="register" className={s.current}>
            Register
          </Link>
          <Link to="login" className={s.current}>
            Login
          </Link>
        </nav>
      )}
    </>
  );
};

export default Navigation;
