import s from './Notification.module.css';
const Notification = props => {
  const { message } = props;
  return <p className={s.text}>{message}</p>;
};

export default Notification;
