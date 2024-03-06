import React, { useEffect } from "react";
import Count from "../components/Count";
import '../style/second_section.css'
import Wheel from "../components/Wheel";

const SecondSection = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            })
        })

        const hiddenElement = document.querySelector('.hidden');
        observer.observe(hiddenElement);
    })

    return (
        <div>
            <section className='second-section'>
                <div className="plan-header-container">
                    <div className="plan-header">
                        <div className="goal-count gradient-title">
                            <b>THE 17</b> <i>GOALS</i>
                        </div>
                        <div className="count">
                            <Count number={169} label={"targets"}/>
                            <Count number={3885} label={"events"}/>
                            <Count number={1358} label={"publications"}/>
                            <Count number={7813} label={"actions"}/>
                        </div>
                    </div>
                </div>
                <div className="second-section-body">
                    <div className="plan-body">
                        <div className="plan-body-title gradient-title">
                            What's the plan?
                        </div>
                        <div className="plan-body-text"  >
                            <p>The 2030 Agenda for Sustainable Development, adopted by all United Nations Member States in 2015, provides a shared blueprint for peace and prosperity for people and the planet, now and into the future. At its heart are the 17 Sustainable Development Goals (SDGs), which are an urgent call for action by all countries - developed and developing - in a global partnership. </p>
                            <p>They recognize that ending poverty and other deprivations must go hand-in-hand with strategies that improve health and education, reduce inequality, and spur economic growth – all while tackling climate change and working to preserve our oceans and forests.</p>
                        </div>
                    </div>
                    <div className="wheel-section hidden">
                        <Wheel/>
                    </div>
               </div>   
            </section>
        </div>
    )
}

export default SecondSection;