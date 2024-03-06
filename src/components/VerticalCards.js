import React from 'react';
import { useState } from 'react';
import '../style/root.css';
import ReactCardFlip from 'react-card-flip';

const VertCards = ({imgSrc, id, content, num}) => {

    const [isOpen, setIsOpen] = useState(false);
    const [id2, setId] = useState();

    const onHover = (event, id) => {

        let id1 = document.getElementById(id).id;
        if(id1 == id){
            setIsOpen((isOpen) => !isOpen);
            setId(id1);
            
        } 
      
    }

    const notHover = (event,id) =>{
        document.getElementById(id).classList.remove(
            'inner-shadow',
            'two-shadows-1'
        )

        if(isOpen){
            setIsOpen((isOpen) => !isOpen);
        }
    }

  
    return (
        <div>  
                    <ReactCardFlip isFlipped= {isOpen} flipDirection='horizontal'>
                     
                        <div   id={id} className="card-container-1" onMouseEnter={event => onHover(event, id)  } 
                       
                           >
                             <img className='cards-img'src={imgSrc}></img>
                            </div>

                            <div className='card-container-1 inner-shadow two-shadows-1' onMouseLeave={event=> notHover(event,id)}  >
                            <div className='card-container-2 card-container'>
                            <p className="card-content">{content}</p>
                          
                            <div className='numdata-container'> 
                                <div className='numdata-items'> 
                                    <div className="numdata">
                                        <h1>{num[0]}</h1>
                                        <p>publications</p>
                                    </div>
                                    <div className="numdata">
                                        <h1>{num[1]}</h1>
                                        <p>actions</p>
                                    </div>
                                </div>
                                <div className='numdata-items'> 
                                    <div className="numdata">
                                        <h1>{num[2]}</h1>
                                        <p>targets</p>
                                    </div>
                                    <div className="numdata">
                                        <h1>{num[3]}</h1>
                                        <p>actions</p>
                                    </div>
                                </div>
                            </div>
                            </div> 
                            </div>


                    </ReactCardFlip>
        
        </div>
    );
}

export default VertCards;