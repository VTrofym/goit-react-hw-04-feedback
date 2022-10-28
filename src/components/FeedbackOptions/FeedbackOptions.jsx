import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ allFeedback, feedback }) => {
  return feedback.map(item => (
    <button
      className={css.button}
      type="buttton"
      key={item}
      onClick={() => allFeedback(item)}
    >
      {item}
    </button>
  ));
};

FeedbackOptions.propTypes = {
  feedback: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  allFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

// export class Feedback extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   allFeedback = feedback => {
//     this.setState(prevState => {
//       return { [feedback]: prevState[feedback] + 1 };
//     });
//   };

// countTotalFeedback = () => {
//   return this.state.good + this.state.neutral + this.state.bad;
// };
// countPositiveFeedbackPercentage = () => {
//   return Math.round((this.state.good * 100) / this.countTotalFeedback());
// };

//   render() {
// const { good, neutral, bad } = this.state;
// const feedback = Object.keys(this.state);

// return (
//   <>
//     <Section title={'Please leave feedback'}>
//       <FeedbackOptions allFeedback={this.allFeedback} feedback={feedback} />
//     </Section>
//     <Section title={'Statistics'}>
//       {this.countTotalFeedback() ? (
//         <Statistics
//           good={good}
//           neutral={neutral}
//           bad={bad}
//           countTotalFeedback={this.countTotalFeedback}
//           countPositiveFeedbackPercentage={
//             this.countPositiveFeedbackPercentage
//           }
//         />
//       ) : (
//         <Notification message={'There is no feedback'}></Notification>
//       )}
//     </Section>
//   </>
// );
//   }
// }
