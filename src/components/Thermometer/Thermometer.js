import ReactSlider from "react-slider";
import './Thermometer.css';
import { useTemperature } from "../../context/ClimateContext";
import { useEffect, useState } from "react";

function Thermometer() {
  const { temperature, setTemperature } = useTemperature();
  const [selectedTemperature, setSelectedTemp] = useState(temperature)

  useEffect(() => {
    debugger
    if (temperature < selectedTemperature) {
      setTimeout(() => { setTemperature(temperature + 1) }
        , 1000)
    } else if (temperature > selectedTemperature) {
      setTimeout(() => { setTemperature(temperature - 1) }
        , 1000)
    }
  }, [selectedTemperature, temperature])

  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {temperature}°F</div>
      <ReactSlider
        value={selectedTemperature}
        onAfterChange={(val) => { setSelectedTemp(val) }}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
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

export default Thermometer;