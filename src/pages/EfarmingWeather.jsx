import React, { useState } from 'react';

const EFarmingWeather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    if (!city.trim()) {
      setError('Please enter a city name.');
      return;
    }
    setError('');

    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=02903bafb2a6eb7b40c6bf8eadfbe18e`);
      const data = await response.json();

      if (data.cod !== 200) {
        setError(data.message);
        setWeather(null);
        return;
      }

      setWeather({
        temp: data.main.temp,
        humidity: data.main.humidity,
        condition: data.weather[0].description,
      });
    } catch (err) {
      setError('Failed to fetch weather information. Please try again later.');
      setWeather(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-8 bg-[url('https://img.freepik.com/free-vector/sky-background-video-conferencing_23-2148623068.jpg')] bg-cover bg-center">
      <h1 className="text-3xl font-bold mb-8">Weather Information ☁️</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-2 border rounded-l-lg"
          placeholder="Enter city name..."
        />
        <button
          onClick={fetchWeather}
          className="bg-green-500 text-white px-4 rounded-r-lg hover:bg-blue-600"
        >
          Get Weather
        </button>
      </div>
      {error && <p className="text-red-500 text-4xl mt-40 mb-4">{error}</p>}
      {weather && (
        <div className="backdrop-blur-xl border mt-10 rounded-2xl shadow-lg p-6 w-90 text-center h-60">
          <h2 className="text-2xl font-bold">{city}</h2>
          <p className="text-lg">🌡️ Temperature: {weather.temp}°C</p>
          <p className="text-lg">💧 Humidity: {weather.humidity}%</p>
          <p className="text-lg">🌥️ Condition: {weather.condition}</p>
        </div>
      )}
    </div>
  );
};

export default EFarmingWeather;
