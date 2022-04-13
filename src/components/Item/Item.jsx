import s from './Item.module.css';
// import { nanoid } from 'nanoid';

const Item = props => {
  const { array } = props;
  const newName = [
    [...array[0]].splice(0, 1)[0].toUpperCase(),
    [...array[0]].splice(1).join(''),
  ].join('');

  return (
    <li className={s.item}>
      <span className={s.text}>
        {newName === 'Positive'
          ? newName + ' ' + 'feedback' + ':'
          : newName + ':'}
      </span>
      <span className={s.text}>
        {newName === 'Positive' ? array[1] + '%' : array[1]}
      </span>
    </li>
  );
};

export default Item;

// key={nanoid()}
