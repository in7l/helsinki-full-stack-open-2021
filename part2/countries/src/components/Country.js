import './Country.css';
import WeatherReport from './WeatherReport';

const Country = ({ country }) => {
  return (
    <div>
      <h2>{country.name}</h2>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h3>languages</h3>
      <ul>
        {country.languages.map((language) => (
          <li key={language.iso639_1}>{language.name}</li>
        ))}
      </ul>
      <img className="flag" src={country.flag} alt="flag" />
      <WeatherReport location={country.capital} />
    </div>
  )
};

export default Country;
