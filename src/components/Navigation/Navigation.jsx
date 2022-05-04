import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <NavLink exact to="/" className={s.current} activeClassName={s.active}>
        HOME
      </NavLink>
      <NavLink to="/phonebook" className={s.current} activeClassName={s.active}>
        PHONEBOOK
      </NavLink>
    </nav>
  );
};

export default Navigation;
