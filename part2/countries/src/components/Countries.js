import Country from './Country';

const Countries = ({ countries, handleCountrySelect }) => {

  let content = 'No countries match the criteria';

  if (countries.length > 10) {
    content = 'Too many matches, specify another filter';
  }
  else if (countries.length > 1) {
    content = (
      <ul>
        {countries.map(country => {
          return (
            <li key={country.name}>
              <span>{country.name}</span>
              <button name={country.name} onClick={handleCountrySelect}>show</button>
            </li>
          );
        })}
      </ul>
    )
  }
  else if (countries.length === 1) {
    content = (<Country country={countries[0]} />);
  }

  return (
    <div>
      {content}
    </div>
  );
};

export default Countries;
