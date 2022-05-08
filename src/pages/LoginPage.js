import LoginForm from 'components/LoginForm/LoginForm';
import { useSelector } from 'react-redux';
import { getIsLogged } from 'redux/auth/token-selectors';

const LoginPage = () => {
  const flag = useSelector(getIsLogged);

  return (
    <>
      <LoginForm />
    </>
  );
  // return <>{flag ? <h2>LoginPage</h2> : ''}</>;
};

export default LoginPage;
