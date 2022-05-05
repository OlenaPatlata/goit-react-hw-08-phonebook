import s from './Container.module.css';
const Container = props => {
  const { children } = props;
  return <div className={s.wrapper}>{children}</div>;
};

export default Container;
