import React, { useState } from 'react';

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');

  const [ search, setSearch ] = useState('');

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();

    const personAlreadyExists = persons.some(person => person.name === newName);
    if (personAlreadyExists) {
      alert(`${newName} is already added to phonebook`);
    }
    else {
      const newPerson = {
        name: newName,
        number: newNumber
      };

      setPersons(persons.concat(newPerson));
      setNewName('');
      setNewNumber('');
    }
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const personsToDisplay = persons.filter(person =>
    person.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={search} onChange={handleSearch} />
      </div>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {personsToDisplay.map(person =>
          <p key={person.name}>{person.name} {person.number}</p>
        )}
      </div>
    </div>
  );
};

export default App;
