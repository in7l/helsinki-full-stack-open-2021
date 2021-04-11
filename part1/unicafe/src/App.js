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

const FeedbackResults = ({good, neutral, bad}) => {
  const all = good + neutral + bad;
  const average = good - bad;
  let positive = 0;
  if (all > 0) {
    positive = (good / all) * 100;
  }

  return (
    <div>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive} %</p>
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
      <FeedbackResults good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;