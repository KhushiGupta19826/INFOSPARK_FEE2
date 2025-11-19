import React from 'react';
import './WeatherCard.css';

const WeatherCard = ({ date, temp, condition, icon }) => {
  // Format the date to display day and date
  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    return dateObj.toLocaleDateString('en-US', options);
  };

  // OpenWeatherMap icon URL
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className="weather-card">
      <div className="weather-card-date">{formatDate(date)}</div>
      <img 
        src={iconUrl} 
        alt={condition} 
        className="weather-card-icon"
      />
      <div className="weather-card-temp">{Math.round(temp)}°C</div>
      <div className="weather-card-condition">{condition}</div>
    </div>
  );
};

export default WeatherCard;
