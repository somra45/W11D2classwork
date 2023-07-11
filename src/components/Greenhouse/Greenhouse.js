import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';
import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';
import {useTheme} from '../../context/ThemeContext.js';

function Greenhouse() {

const {themeName, setThemeName} = useTheme();
let images = ''

function checkTheme () {

    if (themeName === 'day') {
    images = dayImage;
  } else if (themeName === 'night') {
    images = nightImage;
  }
}
checkTheme()

  return (
    <section>
      <img  className='greenhouse-img'
            src={`${images}`}
            alt='greenhouse' 
      />
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;