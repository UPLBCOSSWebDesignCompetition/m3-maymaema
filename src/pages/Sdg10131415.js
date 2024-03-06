import "../style/sdg10131415.css";
import SDGSection from "../components/Sdg-section";
import Flower from "../components/Flower";

const SDG10131415 = ({ content }) => {
    window.addEventListener('scroll', function() {

        var lines = document.getElementsByClassName("gradient-line");

        for (let i = 0; i < lines.length; i++) {
            var line = lines[i];
          var position = line.getBoundingClientRect().top;
          var windowHeight = window.innerHeight;
        
          if (position < windowHeight) { // Adjust 0.9 as needed for when you want the line to appear
            line.style.width = '35%';
          } else {
            line.style.width = '0%';
          }
        }
        

      });

    return (
        <>  
            
            <div className="flower-sdg-cont">
            <Flower/>

            <section id="sdg10to15">
                <div className="text-container long-scroll-title">
                    <p className="long-scroll-title gradient-title"><b>FOR THE</b><i>WORLD</i></p>
                </div>

                <SDGSection
                    idName="sdg10"
                    imgSrc={content[9].imgsrc}
                    text="Despite some progress, challenges remain, such as the persistence of a high share of people living below half the median income in many countries and a decline in the share of economic output earned by workers over the past decade."
                    statsData={[10, 982, 64, 14]}
                />

                <SDGSection
                    idName="sdg13"
                    imgSrc={content[12].imgsrc}
                        text="Despite efforts, post-harvest food losses remain stagnant, far from the goal of halving them by 2030. To achieve SDG12, robust policies promoting sustainable practices and reducing resource use are essential."
                        statsData={[5, 2118, 50, 36]}
                        />

                    <SDGSection
                    idName="sdg14"
                    className="to-show-delay-sec"
                        imgSrc={content[13].imgsrc}
                        text=" Despite some progress in expanding marine protected areas and combating illegal fishing, more concerted efforts and acceleration are needed to advance towards SDG14. Conserve and sustainably use the oceans, seas and marine resources for sustainable development"
                        statsData={[10, 2849, 83, 42]}
                        />

                    <SDGSection
                    idName="sdg15"
                    className="to-show-delay-sec stats-ten"
                    imgSrc={content[14].imgsrc}
                        text="Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss."
                        statsData={[12, 1309, 36, 34]}
                    />


            </section>

            </div>
        </>
    )
}

export default SDG10131415;
