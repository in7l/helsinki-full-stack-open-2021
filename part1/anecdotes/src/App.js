import React, { useState } from 'react';

const Anecdote = ({text, votes}) => (
  <div>
    <p>{text}</p>
    <p>has {votes} votes</p>
  </div>
);

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(
    // Create an array with as many elements as there are anecdotes,
    // and set all values to 0.
    new Array(anecdotes.length).fill(0)
  );

  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values
   */
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  };

  const switchAnecdote = () => {
    if (anecdotes.length > 1) {
      let newIndex;
      // This loop is needed to make sure the anecdote definitely changes on each click.
      do {
        newIndex = getRandomInt(0, anecdotes.length);
      } while (newIndex === selected);

      setSelected(newIndex);
    }
  };

  const incrementAnecdoteScore = (index) => {
    const pointsCopy = [...points];
    pointsCopy[index]++;

    setPoints(pointsCopy);
  };

  const getMaxValueIndex = (arr) => {
    let max = null;
    let maxIndex;

    for (let i = 0; i < arr.length; i++) {
      if (max === null || arr[i] > max) {
        max = arr[i];
        maxIndex = i;
      }
    }

    return maxIndex;
  }

  const mostVotedIndex = getMaxValueIndex(points);

  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        <Anecdote text={anecdotes[selected]} votes={points[selected]} />
        <button onClick={() => incrementAnecdoteScore(selected)}>vote</button>
        <button onClick={switchAnecdote}>next anecdote</button>
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
        <Anecdote text={anecdotes[mostVotedIndex]} votes={points[mostVotedIndex]} />
      </div>
    </div>
  );
};

export default App;
