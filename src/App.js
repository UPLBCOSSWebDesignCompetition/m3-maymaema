import {React} from 'react';
import './style/App.css';
import './style/sdg56712.css'
import './style/sdg123416.css'
import './style/section23.css';
import { sdg_circles} from './data.js';

import FirstSection from './pages/FirstSection.js';
import SecondSection from './pages/SecondSection.js';
import SDG123416 from './pages/Sdg123416.js';
import SDG56712 from './pages/Sdg56712.js';
import SDG8911 from './pages/Sdg8911.js';
import SDG10131415 from './pages/Sdg10131415.js';
import SDG17 from './pages/Sdg17.js';
import End from './pages/End.js';

// import imgs
const iconPaths = [];
const importAll = (myKey) => myKey.keys().forEach(key => iconPaths.push(myKey(key)));
// Import all icons from the Inverted-Icons directory
importAll(require.context('./img/Inverted-Icons/', false, /\.png/));


// Create CONTENT_MASTERLIST dynamically
const CONTENT_MASTERLIST = iconPaths.map((iconPath, index) => ({
  imgsrc: iconPath,
  key: index+1,
}));



function App() {


  return (
    <> 
      <FirstSection/>
      <SecondSection/>
      
      <section className='landing section-circle'>
        <SDG123416 data={sdg_circles} />
      </section>

      <section id="sdg5" className='landing vert-card-section'>
          <SDG56712/>
      </section>

      
      <SDG8911 data={[CONTENT_MASTERLIST[7], CONTENT_MASTERLIST[8], CONTENT_MASTERLIST[10]]}/>
      <SDG10131415 content={CONTENT_MASTERLIST}/>
      <SDG17 content={CONTENT_MASTERLIST[16]}/>
      <End content={CONTENT_MASTERLIST}/>

      <></>
      
    </>
  );
}

export {App, CONTENT_MASTERLIST};

