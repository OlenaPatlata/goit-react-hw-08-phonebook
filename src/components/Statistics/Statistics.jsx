import { Component } from 'react';
import s from './Statistics.module.css';

class Statistics extends Component {
  render() {
    console.log(this.props);
    const { good } = this.props;

    return (
      <ul>
        <li className={s.item}>
          <span className={s.text}>Good:</span>
          <span className={s.text}>{good}</span>
        </li>
        <li className={s.item}>
          <span className={s.text}>Neutral:</span>
          <span className={s.text}></span>
        </li>
        <li className={s.item}>
          <span className={s.text}>Bad:</span>
          <span className={s.text}></span>
        </li>
      </ul>
    );
  }
}

export default Statistics;
