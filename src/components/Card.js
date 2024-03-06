import React from "react";
import '../style/card.css';

const Card = ({img}) => {
    return (
        <div>
            <div className="card-border">
                <div className="ftf-card">
                    <img className="card-img" src={img.imgsrc} alt={img.key}/>
                </div>
            </div>
        </div>
    )
}

export default Card;