import './App.css';
import ForecastOneDay from './ForecastOneDay/ForecastOneDay';
import { useState, useEffect } from 'react';

function App() {

  const [forecast, setForecast] = useState([]);

    useEffect(() => {
        fetch('https://netcraft2.s3-eu-west-1.amazonaws.com/weather.json')
            .then(res => res.json())
            .then(data => setForecast(data))
    }, []);

  return (
    <div>
      {forecast.map(dailyForecast => (
        <ForecastOneDay
          dayOfWeek={dailyForecast.day}
          icon={dailyForecast.icon}
          temperature={dailyForecast.temperature}
          description={dailyForecast.description}
          />
      ))}
    </div>
  );
}

export default App;
