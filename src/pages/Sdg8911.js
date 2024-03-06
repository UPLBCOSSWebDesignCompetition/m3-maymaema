import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import '../style/sdg8911.css';
import Stats from "../components/Stats";
import Card from '../components/Card';

const SDG8911 = ({data}) => {
    useEffect(() => {
        let cards = document.querySelectorAll('.card-component');
        let stackArea = document.querySelector('.stack-area');
        let shapeElement = document.querySelector('.shape-element');
        let text_content = document.querySelector('.text');
        let descriptions = [
            "Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all. The global unemployment rate has slightly decreased but remains a concern, especially among young people, with nearly one in four not in education, employment, or training.  Addressing these issues will require comprehensive reforms in the financial system to tackle rising debts and promote equitable pay and decent work for all.",
            "Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation. Despite global manufacturing employment returning to pre-pandemic levels in 2021, the share of manufacturing employment in total employment continued to decline. To achieve Goal 9 by 2030, it is crucial to support LDCs, invest in advanced technologies, reduce carbon emissions, and enhance global mobile broadband access.",
            "Make cities and human settlements inclusive, safe, resilient and sustainable. To achieve SDG 11, efforts must focus on strengthening urban planning capacities, improving public transportation access, enhancing waste management systems, and increasing the proportion of open public spaces in cities. "
        ]
        let data_list = [
            [48, 1913, 12, 80],
            [17, 1038, 8, 87],
            [20, 1231, 10, 89]
        ]

        function rotateCards() {
            let angle = 0;
            cards.forEach((card) => {
                if (card.classList.contains("active")) {
                    card.style.transform = `translate(-50%, -120vh) rotate(-48deg)`
                } else {
                    card.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`
                    angle = angle - 30;
                }
            })
        }
        rotateCards();

        // change active class based on scroll 
        window.addEventListener("scroll", () => {
            let proportion = stackArea.getBoundingClientRect().top/window.innerHeight;
            if (proportion <= 0) {
                const statsContainer = document.querySelector('.stats');

                let n = cards.length;
                let index = Math.ceil((proportion*n)/2);
                index = Math.abs(index) - 1;
                console.log(index);
                let newData;
                if (index === -1) {
                    text_content.textContent = descriptions[0];
                    newData = data_list[0];
                    ReactDOM.render(<Stats data={newData} />, statsContainer);
                }

                // slide down circle when scrolling at the end of the section 
                if (index > 3) {
                    if (shapeElement.classList.contains('shape-static')) {
                        shapeElement.classList.remove('shape-static');
                        shapeElement.classList.add('shape-slideDown');
                    } else {
                        shapeElement.classList.remove('shape-slideDown');
                        shapeElement.classList.add('shape-static');
                    } 
                } else {
                    if (shapeElement.classList.contains('shape-slideDown')) {
                        shapeElement.classList.remove('shape-slideDown');
                        shapeElement.classList.add('shape-static');
                    } 
                }

                for (let i = 0; i < n; i++) {
                    if (i <= index) {
                        cards[i].classList.add("active");
                        if (index < 2) {
                            text_content.textContent = descriptions[index+1]; 
                            // change stats on scroll
                            newData = data_list[index+1]; 
                            console.log(index+1);
                            ReactDOM.render(<Stats data={newData} />, statsContainer);
                        }
                    } else {
                        cards[i].classList.remove("active");
                    }
                }
                rotateCards();
            }
        })
    });

    return (
        <div className="for-the-future" >
            <div className="content-body" id="sdg8" style={{marginTop:"10%"}}>
                <div className="cards">
                    <div className="stack-area">
                        <div></div>
                        <div className="left">
                            <div className="header-ftf gradient-title">
                                <b>FOR THE</b> <i>FUTURE</i>
                            </div>
                            <div className="card-1 card-component initial-pos-card-1">
                                <Card img={data[0]}/>
                            </div>
                            <div className="card-2 card-component initial-pos-card-2">
                                <Card img={data[1]}/>
                            </div>
                            <div className="card-3 card-component initial-pos-card-3">
                                <Card img={data[2]}/>
                            </div>
                            <div className="shape-element">
                                <div className="circle-ftf"></div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="text">
                                Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all. The global unemployment rate has slightly decreased but remains a concern, especially among young people, with nearly one in four not in education, employment, or training. Addressing these issues will require comprehensive reforms in the financial system to tackle rising debts and promote equitable pay and decent work for all.

                            </div>
                            <div className="stats">
                                <Stats data={[48, 1913, 12, 80]}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SDG8911;