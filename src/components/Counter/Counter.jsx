import Buttons from 'components/Buttons/Buttons';
import Statistics from 'components/Statistics/Statistics';
import Title from 'components/Title/Title';
import Section from 'components/Section/Section';
import React, { Component } from 'react';
// import { render } from 'react-dom';
// import PropTypes from 'prop-types';

class Counter extends Component {
  static defaultProps = {
    initialValueGood: 0,
    initialValueNeutral: 0,
    initialValueBad: 0,
  };
  // static typeProps = {

  // }

  state = {
    good: this.props.initialValueGood,
    neutral: this.props.initialValueNeutral,
    bad: this.props.initialValueBad,
  };

  handleIncrement = event => {
    this.setState(prevState => ({
      [event.target.id]: prevState[event.target.id] + 1,
    }));
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const percentage = (
      (this.state.good / this.countTotalFeedback()) *
      100
    ).toFixed(0);
    return percentage;
  };

  render() {
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section>
          <Title title="Please leave feedback" />
          <Buttons
            names={Object.keys(this.state)}
            onIncrement={this.handleIncrement}
          />
        </Section>
        <Section>
          <Title title="Statistics" />
          <Statistics
            statisticArray={[
              ...Object.entries(this.state),
              ['total', total],
              ['positive', positive],
            ]}
            total={total}
          />
        </Section>
      </>
    );
  }
}

export default Counter;
