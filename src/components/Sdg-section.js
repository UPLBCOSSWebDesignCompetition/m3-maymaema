import React from 'react';
import Stats from './Stats'; // Import the Stats component
import '../style/sdg-section.css';


const SDGSection = ({ imgSrc, text, statsData, idName }) => {


  return (
    <section className='sdg-section' id={idName}>
      <img className="sdg-sec-img right-align" src={imgSrc} alt="SDG Icon" />
      <div className='sdg-sec-text'>{text}</div>
      <div className="gradient-line"></div>
      <div className="sdg-sec-stats right-align">
        <Stats data={statsData} />
      </div>
    </section>
  );
}

export default SDGSection;
