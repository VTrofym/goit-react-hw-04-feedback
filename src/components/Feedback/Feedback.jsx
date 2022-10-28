import { useState } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import { Section } from '../Section/Section';
import Statistics from '../Statistics/Statistics';
import { Notification } from '../Notification/Notification';

const Feedbacks = ['good', 'neutral', 'bad'];
export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const allFeedback = feedback => {
    switch (feedback) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        return null;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / countTotalFeedback());
  };

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions allFeedback={allFeedback} feedback={Feedbacks} />
      </Section>
      <Section title={'Statistics'}>
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            countTotalFeedback={countTotalFeedback}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message={'There is no feedback'}></Notification>
        )}
      </Section>
    </>
  );
};

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
