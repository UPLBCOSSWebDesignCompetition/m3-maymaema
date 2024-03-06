import React from "react"
import wheel from "../img/sdg_wheel.png";
import '../style/wheel.css';

const Wheel = () => {
    return (
        <div>
            <section>
                <div className='whole-ball'>
                    <div className='circle two-shadows-2-hover two-shadows'></div>
                    <div className='w-container'>
                        <img className="wheel" src={wheel} alt="wheel"/> 
                    </div>
                </div>      
            </section>
        </div>
    )
}

export default Wheel