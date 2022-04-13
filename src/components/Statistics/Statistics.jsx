import { Component } from 'react';
import s from './Statistics.module.css';

class Statistics extends Component {
  render() {
    console.log(this.props);
    const {
      goodValue,
      neutralValue,
      badValue,
      onCountTotal = 0,
      onPositiveFeedback = 0,
    } = this.props;

    return (
      <ul>
        <li className={s.item}>
          <span className={s.text}>Good: </span>
          <span className={s.text}>{goodValue}</span>
        </li>
        <li className={s.item}>
          <span className={s.text}>Neutral: </span>
          <span className={s.text}>{neutralValue}</span>
        </li>
        <li className={s.item}>
          <span className={s.text}>Bad: </span>
          <span className={s.text}>{badValue}</span>
        </li>
        <li className={s.item}>
          <span className={s.text}>Total: </span>
          <span className={s.text}>{onCountTotal}</span>
        </li>
        {onCountTotal > 0 ? (
          <li className={s.item}>
            <span className={s.text}>Positive feedback: </span>
            <span className={s.text}>{onPositiveFeedback}%</span>
          </li>
        ) : (
          ''
        )}
      </ul>
    );
  }
}

export default Statistics;
