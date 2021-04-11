import React, { useState } from 'react';

const Display = props => <div>{props.value}</div>;

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [value, setValue] = useState(10);

  return (
    <div>
      <Display value={value} />
      <Button handleClick={() => setValue(1000)} text="thousand" />
      <Button handleClick={() => setValue(0)} text="reset" />
      <Button handleClick={() => setValue(value + 1)} text="increment" />
    </div>
  );
};

export default App;
