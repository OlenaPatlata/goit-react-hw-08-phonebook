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
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    const percentage = (
      (this.state.good / this.countTotalFeedback()) *
      100
    ).toFixed(0);
    return percentage;
  };

  render() {
    return (
      <>
        <Section>
          <Title title="Please leave feedback" />
          <Buttons
            onIncrementGood={this.handleIncrementGood}
            onIncrementNeutral={this.handleIncrementNeutral}
            onIncrementBad={this.handleIncrementBad}
          />
        </Section>
        <Section>
          <Title title="Statistics" />
          <Statistics
            goodValue={this.state.good}
            neutralValue={this.state.neutral}
            badValue={this.state.bad}
            onCountTotal={this.countTotalFeedback()}
            onPositiveFeedback={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}

export default Counter;
