import React from 'react';
import PropTypes from 'prop-types';
import s from './Section.module.css';

const Section = props => {
  const { children } = props;
  return <section className={s.wrapper}>{children}</section>;
};

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;
