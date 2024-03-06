import React from 'react';
import '../style/count.css';
import CountUp from 'react-countup';


const Count = ({number, label}) => {
    return (
        <div className="parent">
            <div className="number">
                <CountUp end={number} enableScrollSpy={true}/>
            </div>
            <div className="label">
                {label}
            </div>
        </div>
    )
}

export default Count;