import { Component } from 'react';
import s from './Buttons.module.css';

class Buttons extends Component {
  render() {
    const { onIncrementGood, onIncrementNeutral, onIncrementBad } = this.props;
    return (
      <div className={s.wrapper}>
        <button type="button" className={s.btn} onClick={onIncrementGood}>
          Good
        </button>
        <button type="button" className={s.btn} onClick={onIncrementNeutral}>
          Neutral
        </button>
        <button type="button" className={s.btn} onClick={onIncrementBad}>
          Bad
        </button>
      </div>
    );
  }
}

export default Buttons;
