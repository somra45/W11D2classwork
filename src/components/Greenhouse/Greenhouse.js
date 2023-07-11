import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';
import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';
import {useTheme} from '../context/ThemeContext.js';

function Greenhouse() {

// const {themeName, setThemeName} = useTheme();
// if (themeName =='day') {
//   const image = dayImage;
// } else if (themeName =='night') {
//   const image = nightImage;
// }

  return (
    <section>
      <img  className='greenhouse-img'
            src={"image"}
            alt='greenhouse' 
      />
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;