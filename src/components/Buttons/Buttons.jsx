import { Component } from 'react';
import s from './Buttons.module.css';

class Buttons extends Component {
  render() {
    const { names, onIncrement } = this.props;

    return (
      <div className={s.wrapper}>
        {names.map(name => (
          <button
            key={name}
            id={name}
            type="button"
            className={s.btn}
            onClick={onIncrement}
          >
            {name}
          </button>
        ))}
      </div>
    );
  }
}

export default Buttons;
