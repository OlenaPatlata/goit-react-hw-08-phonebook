import { Link } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <Link to="/" className={s.current}>
        HOME
      </Link>
      <Link to="phonebook" className={s.current}>
        PHONEBOOK
      </Link>
    </nav>
  );
};

export default Navigation;
