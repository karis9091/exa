import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard';
import ButtonPush from './ButtonPush';
import '../assets/css/WeatherList.css'


const WeatherList = () => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const cities = ['Mexicali', 'Delaware', 'Michoacan', 'Tijuana', 'Hermosillo'];
    const promises = [];

    cities.forEach(city => {
      promises.push(
        axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
          )
      );
    });

    Promise.all(promises)
      .then(responses => {
        const data = responses.map(response => ({
          city: response.data.name,
          weather: response.data.weather[0].main,
          temp: Math.round(response.data.main.temp),
        }));
        setWeatherData(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className='row'>
            <div style={styles.rowContainer}>
                {weatherData.map((data, index) => (
                <WeatherCard
                    key={index}
                    city={data.city}
                    weather={data.weather}
                    temp={data.temp}
                />
                ))}
            </div>
            <div className='col-12 mt-3'>
                <ButtonPush/>
            </div>
        </div>
      </div>
    </>
  );
};
const styles={
  rowContainer:{
    padding:150,
    display:"flex",
    flexDirection:"row",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    gap:30,
  }
}
export default WeatherList;
