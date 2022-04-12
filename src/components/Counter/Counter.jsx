import Buttons from 'components/Buttons/Buttons';
import Statistics from 'components/Statistics/Statistics';
import Title from 'components/Title/Title';
import React, { Component } from 'react';
// import { render } from 'react-dom';
// import PropTypes from 'pr'

class Counter extends Component {
  static defaultProps = {
    initialValueGood: 0,
    initialValueNeutral: 0,
    initialValueBad: 0,
  };

  state = {
    good: this.props.initialValueGood,
    neutral: this.props.initialValueNeutral,
    bad: this.props.initialValueBad,
  };

  handleIncrementGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  handleIncrementNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  handleIncrementBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    console.log(this.state);
    return (
      <div className="">
        <Title title="Please leave feedback" />
        <Buttons
          onIncrementGood={this.handleIncrementGood}
          onIncrementNeutral={this.handleIncrementNeutral}
          onIncrementBad={this.handleIncrementBad}
        />
        <Title title="Statistics" />
        <Statistics
          goodValue={this.state.good}
          initialValueGood={this.initialValueGood}
        />
      </div>
    );
  }
}

export default Counter;
