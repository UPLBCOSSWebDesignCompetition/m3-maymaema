import React, { useEffect } from 'react';
import '../style/sdg17.css'
import Stat from '../components/Stats';
import Typed from 'typed.js';

const SDG17 = ({content}) => {
    const el = React.useRef(null);
    React.useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ['<b>...AND FOR</b> <i>NOW</i>^1000'],
          typeSpeed: 50,
          backSpeed: 50,
        });
    
        return () => {
          // Destroy Typed instance during cleanup to stop animation
          typed.destroy();
        };
      }, []);

    return(
        <>
        <section id="sdg17">
            <div className="sdg-17-header gradient-title">
                <span ref={el}></span>
            </div>

            <div className='sdg-17-body'>
                <div class="content content-1">
                    <p>
                    Funding for development remains insufficient, especially for low-income countries, and international cooperation is hampered by geopolitical tensions and nationalism. Though internet access and trade have grown, significant gaps persist, particularly for developing countries. Despite increases in funding for data and statistics, long-term challenges hinder progress.
                    </p>
                </div>

                <img class="sdg17-img" src={content.imgsrc}/>
                
                <div class="stat-section">
                    <Stat data={[19,76,230,2183]}/>
                </div>
                
            </div>
        </section>
        </>
    )
}
export default SDG17;