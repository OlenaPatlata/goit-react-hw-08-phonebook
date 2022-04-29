import React from 'react';
import { useSelector, connect } from 'react-redux';
import s from './Filter.module.css';
import PropTypes from 'prop-types';
import actions from 'redux/phonebook/phonebook-actions';

const Filter = ({ filterContact, onChangeFilter }) => (
  <div className={s.wrapper}>
    <label className={s.label}>Find contacts by name</label>
    <input
      type="text"
      name="filter"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      className={s.input}
      value={filterContact}
      onChange={onChangeFilter}
    />
  </div>
);
Filter.propTypes = {
  filterContact: PropTypes.string,
  onChangeFilter: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  filterContact: state.filterContact,
});
const mapDispatchToProps = dispatch => ({
  onChangeFilter: filterContact =>
    dispatch(actions.myActionFilterContact(filterContact)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
