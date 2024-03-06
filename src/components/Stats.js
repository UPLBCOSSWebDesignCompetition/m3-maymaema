import React from 'react';
import '../style/stats.css'
import CountUp from 'react-countup';

const Stats = ({data}) => {
    return(
        <>
            <div class="value">
                <CountUp duration={1} end={data[0]} enableScrollSpy={true}/>
                <p>publications</p>
            </div>

            <div class="value">
                <CountUp duration={1} end={data[1]} enableScrollSpy={true}/>
                <p>actions</p>
            </div>

            <div class="value">
                <CountUp  duration={1}end={data[2]} enableScrollSpy={true}/>
                <p>targets</p>
            </div>

            <div class="value">
                <CountUp  duration={1} end={data[3]} enableScrollSpy={true}/>
                <p>events</p>
            </div>

        </>
    )
}
export default Stats;