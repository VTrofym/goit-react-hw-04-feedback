import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({allFeedback, feedback}) => {
  return (
    feedback.map(item => (
      <button className={css.button} type='buttton' key={item} onClick={() => allFeedback(item)}>{item}</button>
    ))
  );
};

FeedbackOptions.propTypes = {
  feedback: PropTypes.array.isRequired,
  allFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;
