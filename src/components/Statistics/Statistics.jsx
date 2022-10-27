import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <div>
      <p style={{ color: 'green' }} >Good: {good}</p>
      <p style={{ color: 'orange' }} >Neutral: {neutral}</p>
      <p style={{ color: 'red' }} >Bad: {bad}</p>
      <p style={{ color: 'blue' }} > Total: {countTotalFeedback()}</p>
      <p style={{ color: 'blueviolet' }}>
        Positive feedback:
        {countPositiveFeedbackPercentage() || 0}%
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.func.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
};

export default Statistics;

