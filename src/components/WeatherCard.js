import React from 'react';
import { FaCloud, FaSun, FaSnowflake, FaCloudRain } from 'react-icons/fa';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/css/weatherCard.css';

const WeatherCard = ({ city, weather, temp }) => {
  const getWeatherColor = (color) => {
    switch (weather) {
      case 'Clouds':
        return "grey";
      case 'Clear':
        return "green";
      case 'Snow':
        return "white";
      case 'Rain':
        return "blue";
      default:
        return "yellow";
    }
  };

  return (
    <div style={{...styles.container, backgroundColor: getWeatherColor()}}>
    <div className='row'>
        <div className=' card-body'>
            <h2 style={styles.text}className='city text-center card-title'>{city}</h2>
        </div>
        <div className=' card-text'>           
            <div style={styles.text}className="temp">{temp}°C</div>
        </div>
    </div>
  </div>
);
};

const styles={
  container:{
    height: 150,
    width: 150,
    //backgroundColor:"blue",
    borderRadius:20,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  },
  text:{
    color:"white",
  }
}

export default WeatherCard;