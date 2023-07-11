import ReactSlider from "react-slider";
import "./Hygrometer.css";
import { useTemperature } from "../../context/ClimateContext";
import {useState, useEffect} from 'react'

function Hygrometer() {
  const { humidity, setHumidity } = useTemperature();

  const [selectedHumidity, setSelectedHumidity] = useState(humidity)

  useEffect(() => {
    if (selectedHumidity > humidity) {
      clearTimeout();
      setTimeout(() => {
        setHumidity(humidity + 1)
      }, 1000)
    } else if (selectedHumidity < humidity) {
      clearTimeout();
      setTimeout(() => {
        setHumidity(humidity - 1)
      }, 1000)
    }
    return () => {
      clearTimeout();
    }
  }, [humidity, selectedHumidity])

  return (
    <section>
      <h2>Hygrometer</h2>
      <div className="actual-humid">Actual Humidity: {humidity}%</div>
      <ReactSlider
        value={selectedHumidity}
        onAfterChange={(val) => { 
          setSelectedHumidity(val);}}
        className="hygrometer-slider"
        thumbClassName="hygrometer-thumb"
        trackClassName="hygrometer-track"
        ariaLabel={"Hygrometer"}
        orientation="vertical"
        min={0}
        max={100}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Hygrometer;