import { useSelector } from 'react-redux';
import { getIsLogged } from 'redux/auth/token-selectors';
import RegisterForm from 'components/RegisterForm/RegisterForm';

const RegisterPage = () => {
  const flag = useSelector(getIsLogged);
  return (
    <>
      <RegisterForm />
    </>
  );
  // return <>{!flag ? <RegisterForm /> : ''}</>;
};

export default RegisterPage;
