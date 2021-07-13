import { useState, useEffect } from "react";
import axios from 'axios';

const WeatherReport = ({ location }) => {
  // Where on earth id.
  const [woeid, setWoeid] = useState(null);
  const [weatherState, setWeatherState] = useState(null);
  const [temperature, setTemperature] = useState(null);


  useEffect(() => {
    axios
      .get(`http://localhost:3003/location/search/${location}`)
      .then((response) => {
        if (response.data.length > 0) {
          setWoeid(response.data[0].woeid);
        }
        else {
          setWoeid(null);
        }
      })
  }, [location]);

  useEffect(() => {
    if (woeid !== null) {
      axios
        .get(`http://localhost:3003/location/${woeid}`)
        .then((response) => {
          console.log('response', response);
          if (response.data.consolidated_weather) {
            const weatherData = response.data.consolidated_weather[0];
            setWeatherState(weatherData.weather_state_name);
            setTemperature(weatherData.the_temp);
          } else {
            setWeatherState(null);
            setTemperature(null);
          }
        });
    }
  }, [woeid]);

  return (
    <div>
      <h3>Weather in {location}</h3>
      <p>temperature: {temperature || 'N/A'}</p>
      <p>weather state: {weatherState || 'N/A'}</p>
    </div>
  );
};

export default WeatherReport;
