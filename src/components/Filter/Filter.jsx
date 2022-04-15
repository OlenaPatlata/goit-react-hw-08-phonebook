import React from 'react';
import s from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChangeFilter }) => (
  <div className={s.wrapper}>
    <label className={s.label}>Find contacts by name</label>
    <input
      type="text"
      name="filter"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      className={s.input}
      value={value}
      onChange={onChangeFilter}
    />
  </div>
);
Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
