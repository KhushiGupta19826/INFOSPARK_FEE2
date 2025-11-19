import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Loader from '../components/Loader';
import WeatherCard from '../components/WeatherCard';
import '../styles/Weather.css';

function Weather() {
  const navigate = useNavigate();
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    const API_KEY = "29c2b524b950dbc23b18ed9c922276b4";
    
    if (!API_KEY) {
      setError('Weather API key is not configured. Please check your .env file.');
      return;
    }
    
    if (!city.trim()) {
      setError('Please enter a city name');
      return;
    }

    setLoading(true);
    setError('');
    setWeatherData(null);
    setForecast([]);

    try {
      // Fetch current weather
      const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
      const currentResponse = await fetch(currentWeatherUrl);
      
      if (!currentResponse.ok) {
        const errorData = await currentResponse.json();
        throw new Error(errorData.message || 'City not found. Please check the spelling and try again.');
      }
      
      const currentData = await currentResponse.json();
      setWeatherData(currentData);

      // Fetch 5-day forecast
      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
      const forecastResponse = await fetch(forecastUrl);
      
      if (!forecastResponse.ok) {
        throw new Error('Unable to fetch forecast data');
      }
      
      const forecastData = await forecastResponse.json();
      setForecast(forecastData.list);
      
    } catch (err) {
      console.error('Weather fetch error:', err);
      setError(err.message || 'Failed to fetch weather data. Please try again.');
      setWeatherData(null);
      setForecast([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <div className="weather-page">
      <div className="weather-container">
        <button className="back-button" onClick={() => navigate('/dashboard')}>
          <FaArrowLeft /> Back to Dashboard
        </button>
        <h1>Weather Forecast</h1>
        
        <form onSubmit={handleSubmit} className="weather-search-form">
          <input
            type="text"
            placeholder="Enter city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="weather-search-input"
          />
          <button type="submit" className="weather-search-button">
            Search
          </button>
        </form>

        {loading && <Loader />}

        {error && (
          <div className="weather-error">
            <p>{error}</p>
          </div>
        )}

        {weatherData && !loading && (
          <div className="weather-current">
            <h2>{weatherData.name}</h2>
            <div className="weather-current-main">
              <img 
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
                alt={weatherData.weather[0].main}
                className="weather-current-icon"
              />
              <div className="weather-current-temp">
                {Math.round(weatherData.main.temp)}°C
              </div>
            </div>
            <div className="weather-current-condition">
              {weatherData.weather[0].main}
            </div>
            <div className="weather-current-details">
              <div className="weather-detail">
                <span className="weather-detail-label">Humidity:</span>
                <span className="weather-detail-value">{weatherData.main.humidity}%</span>
              </div>
              <div className="weather-detail">
                <span className="weather-detail-label">Wind Speed:</span>
                <span className="weather-detail-value">{weatherData.wind.speed} m/s</span>
              </div>
            </div>
          </div>
        )}

        {forecast.length > 0 && !loading && (
          <div className="weather-forecast">
            <h2>5-Day Forecast</h2>
            <div className="weather-forecast-grid">
              {forecast
                .filter((item, index) => index % 8 === 0)
                .slice(0, 5)
                .map((item, index) => (
                  <WeatherCard
                    key={index}
                    date={item.dt_txt}
                    temp={item.main.temp}
                    condition={item.weather[0].main}
                    icon={item.weather[0].icon}
                  />
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Weather;
