import React, { useState } from 'react';

const Button = ({ handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
);

const FeedbackInput = ({ incrementGood, incrementNeutral, incrementBad }) => (
  <div>
    <h1>give feedback</h1>
    <Button handleClick={incrementGood} text="good" />
    <Button handleClick={incrementNeutral} text="neutral" />
    <Button handleClick={incrementBad} text="bad" />
  </div>
);

const Statistic = ({ text, value}) => (<p>{text} {value}</p>)

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad;
  const average = good - bad;
  let positive = 0;
  if (all > 0) {
    positive = (good / all) * 100;
  }

  let statisticsElements = (<p>No feedback given</p>);
  if (all > 0) {
    statisticsElements = (
      <>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <Statistic text="all" value={all} />
        <Statistic text="average" value={average} />
        <Statistic text="positive" value={positive + ' %'} />
      </>
    );
  }

  return (
    <div>
      <h1>statistics</h1>
      {statisticsElements}
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <FeedbackInput
        incrementGood={() => setGood(good + 1)}
        incrementNeutral={() => setNeutral(neutral + 1)}
        incrementBad={() => setBad(bad + 1)}
      />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;