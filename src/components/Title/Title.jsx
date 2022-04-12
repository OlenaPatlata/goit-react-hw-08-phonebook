import React from 'react';
import s from './Title.module.css';

const Title = props => {
  const { title } = props;
  return <h1 className={s.title}>{title}</h1>;
};

export default Title;
