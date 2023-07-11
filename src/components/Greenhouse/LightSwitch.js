import './LightSwitch.css';
import {useTheme} from '../../context/ThemeContext.js';

function LightSwitch() {

  const {themeName, setThemeName} = useTheme();

const handleOnClick = function (theme) {
  return (event) => {
    setThemeName(theme)
  }
};
 
  return (
    <div className={`light-switch ${themeName}`}>
      <div className="on" onClick={handleOnClick('day')} >DAY</div>
      <div className="off"onClick={handleOnClick('night')} >NIGHT</div>
    </div>
  );
}

export default LightSwitch;