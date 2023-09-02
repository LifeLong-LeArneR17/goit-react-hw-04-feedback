// import React, { Component } from "react";
// import { Statistics } from "components/Statistics/Statistics";
// import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
// import { Section } from "components/Section/Section";
// import { Notification } from "components/Notification/Notification";

// export class Feedback extends Component {
//     state = {
//         good: 0,
//         neutral: 0,
//         bad: 0
//     };

//     OnChangeButtonGood = () => {
//         this.setState((prevState) => ({
//             good: prevState.good + 1
//         }));
//     };

//     OnChangeButtonNeutral = () => {
//         this.setState((PrevState) => ({
//             neutral: PrevState.neutral + 1
//         }));
//     };

//     OnChangeButtonBad = () => {
//         this.setState((PrevState) => ({
//             bad: PrevState.bad + 1
//         }));
//     };

//     countTotalFeedback = () => {
//         return this.state.good + this.state.neutral + this.state.bad;
//     };

//     countPositiveFeedbackPercentage = () => {
//         return (this.state.good / this.countTotalFeedback()) * 100;
//     };

//     render() {
//         const options = [
//             { label: "Good", onClick: this.OnChangeButtonGood },
//             { label: "Neutral", onClick: this.OnChangeButtonNeutral },
//             { label: "Bad", onClick: this.OnChangeButtonBad }
//         ];

//         return (
//             <div>
//                 <Section title="Please leave feedback">
//                 <FeedbackOptions options={options} />
//                 {this.countTotalFeedback() === 0 ? <Notification  message="There is no feedback"/> :   <Statistics
//                     good={this.state.good}
//                     neutral={this.state.neutral}
//                     bad={this.state.bad}
//                     total={this.countTotalFeedback()}
//                     positivePercentage={
//                         this.countTotalFeedback() === 0
//                             ? "0"
//                             : this.countPositiveFeedbackPercentage()
//                     }
//                 />}
//                  </Section>
//             </div>
//         );
//     }
// }

// export default Feedback;

import React, { useState } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';

export function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const OnChangeButtonGood = () => {
    setGood(prevState => prevState + 1);
  };

  const OnChangeButtonNeutral = () => {
    setNeutral(prevState => prevState + 1);
  };

  const OnChangeButtonBad = () => {
    setBad(prevState => prevState + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    return (good / totalFeedback) * 100;
  };

  const options = [
    { label: 'Good', onClick: OnChangeButtonGood },
    { label: 'Neutral', onClick: OnChangeButtonNeutral },
    { label: 'Bad', onClick: OnChangeButtonBad },
  ];

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} />
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={
              countTotalFeedback() === 0
                ? '0'
                : countPositiveFeedbackPercentage()
            }
          />
        )}
      </Section>
    </div>
  );
}

export default Feedback;
