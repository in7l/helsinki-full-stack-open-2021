import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personService from './services/persons';

const App = () => {
  const [ persons, setPersons ] = useState([]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ search, setSearch ] = useState('');

  useEffect(() => {
    personService.getAll()
      .then(allPersons => {
        setPersons(allPersons);
      })
  }, []);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const addPerson = () => {
    const newPerson = {
      name: newName,
      number: newNumber
    };

    personService
      .create(newPerson)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson));
        setNewName('');
        setNewNumber('');
      });
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const personsToDisplay = persons.filter(person =>
    person.name.toLowerCase().includes(search.toLowerCase())
  );

  const deletePersonById = (id) => {
    const person = persons.find(p => p.id === id);
    const deleteConfirmed = window.confirm(`Delete ${person.name} ?`);

    if (deleteConfirmed === false) {
      return;
    }

    personService
      .remove(id)
      .then(() => {
        setPersons(persons.filter(p => p.id !== id));
      });
  };

  const updatePhoneNumber = (personId) => {
    const person = persons.find(p => p.id === personId);
    const updateConfirmed = window.confirm(
      `${person.name} is already added to the phonebook, `
      + 'replace the old number with a new one?'
    );

    if (updateConfirmed === false) {
      return;
    }

    const updatedPerson = {
      ...person,
      number: newNumber
    };

    personService
      .update(personId, updatedPerson)
      .then((returnedPerson) => {
        setPersons(persons.map(
          p => p.id !== returnedPerson.id ? p : returnedPerson
        ));
        setNewName('');
        setNewNumber('');
      });
  };

  const addOrUpdatePerson = (event) => {
    event.preventDefault();

    const person = persons.find(person => person.name === newName);
    if (person) {
      updatePhoneNumber(person.id);
    } else {
      addPerson();
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} handleSearch={handleSearch} />
      <PersonForm
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        addOrUpdatePerson={addOrUpdatePerson}
      />
      <h2>Numbers</h2>
      <Persons persons={personsToDisplay} deletePersonById={deletePersonById} />
    </div>
  );
};

export default App;
