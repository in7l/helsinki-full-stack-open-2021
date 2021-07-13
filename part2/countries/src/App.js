import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import Countries from './components/Countries';

const App = () => {
  const [search, setSearch] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then((response) => {
        setCountries(response.data);
      })
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const countriesToDisplay = countries.filter(
    (country) => country.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Filter search={search} handleSearch={handleSearch} />
      <Countries countries={countriesToDisplay} />
    </div>
  );
};

export default App;
