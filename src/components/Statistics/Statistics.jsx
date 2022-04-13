import { Component } from 'react';
// import s from './Statistics.module.css';
import Item from 'components/Item/Item';
import Notification from 'components/Notification/Notification';

class Statistics extends Component {
  render() {
    const { statisticArray, total } = this.props;

    return total > 0 ? (
      <ul>
        {statisticArray.map(array => {
          return <Item key={array[0]} array={array} />;
        })}
      </ul>
    ) : (
      <Notification message="There is no feedback" />
    );
  }
}

export default Statistics;
