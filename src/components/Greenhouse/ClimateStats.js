import './ClimateStats.css';
import { useTemperature } from '../../context/ClimateContext';

function ClimateStats() {
  const { temperature, setTemperature } = useTemperature();
  const { humidity, setHumidity } = useTemperature();

  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {temperature}°F
      </div>
      <div className="humidity">
        Humidity {humidity}%
      </div>
    </div>
  )
}

export default ClimateStats;