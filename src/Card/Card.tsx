import React from "react";
import { useState } from "react";
import "./Card.scss";

interface Props {
  name: string;
  top: number;
  left: number;
  key : number,
  removeCard : any 
}

const Card: React.FC<Props> = ({ name, key, top, left, removeCard }) => {
    let innerStyle: {
        top: number;
        left: number;
    };
    innerStyle = {
        top: top,
        left: left,
    };

    const [isFlipped, setIsFlipped] = useState(false);
    const [cardContent, setCardContent] = useState("");
    const flipCard = () => {
        setIsFlipped(!isFlipped);
        setCardContent(name);
    }
  
  return (
    <div key = {key} className= {isFlipped? "card flipped" : "card"} style={innerStyle}>
      <div className="card__inner">
        <div className="card__inner__recto">
            <button onClick={flipCard}>
                Flip the card
            </button>
        </div>
        <div className="card__inner__verso">
            <div className="text">
                {cardContent}
                <button
                  onClick={() => removeCard()}>
                  Remove this card
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
