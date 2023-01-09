
import { useState } from "react";
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import { Section } from 'components/Section/Section';



export function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackItems = ['good', 'neutral', 'bad']

  const onLeaveFeedback = (btn) => {
    switch (btn) {
      case 'good':
        setGood((prevState) => prevState + 1);
        break;
      case 'neutral':
        setNeutral((prevState) => prevState + 1);
        break;
      case 'bad':
        setBad((prevState) => prevState + 1);
        break;
      default:
        return;
    }
  };

  const totalFeedback = () => {
    let total = good + neutral + bad
    return total
  }

  const positivePercent = () => {
    if (totalFeedback() === 0) {
      return 0
    }
    else {
      let result = 0
      result = Math.round((good / totalFeedback()) * 100)
      return result
    }
  }

  const totalFeedBack = totalFeedback();
  const positiveFeedback = positivePercent();

  return (
    <div style={{
      margin: "100px auto",
      padding: '15px',
      width: "700px",
      fontSize: '20px',
      textAlign: 'center',
      background: '#d3d3d3'
    }}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbackItems}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {good || neutral || bad > 0
          ? <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedBack}
            positivePercentage={positiveFeedback}
          />
          : <Notification message='There is no feedback' />
        }
      </Section>
    </div>
  )

}
