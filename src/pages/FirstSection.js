import React, { useEffect } from "react";
import HeaderTyping from '../components/HeaderTyping';
import Wheel from "../components/Wheel";
import '../style/first_section.css';

const FirstSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
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
      <section className="landing">
        <div className='first-section-header'>
          <div>The 17 SDG</div>
          <div className="gradient-title header-text"> <b>THE WORLD'S</b> <span className='best-plan'>BEST PLAN</span></div>
          <div className="type-container">
            <HeaderTyping/>
          </div> 
        </div>
        <div className="wheel-section hidden">
          <Wheel/>
        </div>
      </section>
    </div>
  )
}

export default FirstSection;