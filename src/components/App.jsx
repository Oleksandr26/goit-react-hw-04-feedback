import 'modern-normalize/modern-normalize.css';
import { useState } from 'react';
import s from './Feedback/Feedback.module.css';
import { FeedbackOptions } from './Feedback/Feedback.jsx';
import { Statistics } from './Statistics/Statistics';
import { Section } from './SectionTitle/SectionTitle';
import { Notification } from './Notification/Notification';

export function App() {
  // const [good, setGood] = useState(0);
  // const [neutral, setNeutral] = useState(0);
  // const [bad, setBad] = useState(0);
  const [feedbackOptions, setfeedbackOptions] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  function onLeaveFeedback(options) {
    setfeedbackOptions(prevState => {
      return {
        ...prevState,
        [options]: prevState[options] + 1,
      };
    });
  }

  function countTotalFeedback() {
    const { good, neutral, bad } = feedbackOptions;
    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage() {
    const { good } = feedbackOptions;
    const total = countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  }

  const { good, neutral, bad } = feedbackOptions;

  return (
    <div className={s.feedback}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedbackOptions)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}
