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
    console.log('click', event);
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
          options={['good', 'neutral', 'bad']}
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
// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     return parseInt((this.state.good / this.countTotalFeedback()) * 100);
//   };

//   onLeaveFeedback = option => {
//     if (option === 'good') {
//       this.setState(prevState => {
//         return {
//           good: prevState.good + 1,
//         };
//       });
//     }

//     if (option === 'neutral') {
//       this.setState(prevState => {
//         return {
//           neutral: prevState.neutral + 1,
//         };
//       });
//     }
//     if (option === 'bad') {
//       this.setState(prevState => {
//         return {
//           bad: prevState.bad + 1,
//         };
//       });
//     }
//   };

//   render() {
//     return (
//       <Container>
//         <Section title="Leave your feedback">
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={this.onLeaveFeedback}
//           ></FeedbackOptions>
//         </Section>
//         <Section title="Statistics">
//           {this.countTotalFeedback() === 0 ? (
//             <Notification message="There is no feedback" />
//           ) : (
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           )}
//         </Section>
//       </Container>
//     );
//   }
// }
