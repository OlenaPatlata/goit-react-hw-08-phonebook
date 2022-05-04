import s from './Button.module.css';
const Button = ({ title, onClickBack }) => {
  return (
    <button type="button" className={s.button} onClick={onClickBack}>
      {title}
    </button>
  );
};

export default Button;
