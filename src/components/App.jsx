import React, { useState } from 'react';
import { Section } from '../Section/Section';
import Statistics from './Statistics/Statistics';
import { Container } from './App.styled';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';

const options = ['good', 'neutral', 'bad'];

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  let total = good + neutral + bad;
  let positivePersentage = Number.parseInt((good / total) * 100);
  //обробник натискання кнопки

  const handleClick = event => {
    switch (event.currentTarget.value) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };

  return (
    <Container>
      <Section title="Leave your feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleClick}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {good + neutral + bad > 0 ? (
          <>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePersentage={positivePersentage}
            />
          </>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
};

export default App;
