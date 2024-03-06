import Vertical_Cards from '../components/VerticalCards'
import { CONTENT_MASTERLIST } from '../App';

function SDG56712(){
   
    return(
        <>        
    <Vertical_Cards
      imgSrc={CONTENT_MASTERLIST[4].imgsrc}
      id= "5"
      content= "Achieve gender equality and empower all women and girls. The world is not on track to achieve gender equality by 20230. Legislated gender quotas are effective to achieve equality in politics."
      num= {[46,1646,9,65]}></Vertical_Cards>

            <Vertical_Cards
      imgSrc={CONTENT_MASTERLIST[5].imgsrc}
      id= '6'
      content="Ensure availability and sustainable management of water and sanitationfor all. Safe drinking water, sanitation and hygiene are still out of reach for billions. Thus, integrated water-resources-management implementation needs acceleration."
      num= {[36,1815,8,277]}></Vertical_Cards>

            <Vertical_Cards
      imgSrc= {CONTENT_MASTERLIST[6].imgsrc}
      id= '7'
      content= "Ensure access to affordable, reliable, sustainable and modern energy for all. 675 million people are still live in the dark. Thus, energy efficient improvement must more than double its pace."
      num= {[45,1040,6,64]}></Vertical_Cards>

            <Vertical_Cards
      imgSrc= {CONTENT_MASTERLIST[11].imgsrc}
      id= '12'
      content= "Ensure sustainable consumption and production patterns. High-income countries leave a larger environmental footprint compared to low-income countries. Despite calls for phase-out, fossil fuel subsidies return and nearly doubled, triggered by global crises."
      num= {[16,1597,11,32]}></Vertical_Cards>
        </>
    )



}

export default SDG56712;