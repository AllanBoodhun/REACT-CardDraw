import "./Draw.scss";

import { useState } from "react";

import Card from "../Card/Card";
import data from '../CardContent/CardContent.json';

function Draw() {


  function shuffleCard<T>(array: T[]): T[] {
    let currentIndex = array.length,  randomIndex;
    // Boucle pour savoir si il reste des éléments à shuffle
    while (currentIndex !== 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  };

  const firstPickCards = shuffleCard(data.Cards);
  const [cards, setCards] = useState<object[]>(firstPickCards); 

  const removeCards = () => {
    setCards(cards.slice(0, cards.length -1))
  }  

  let top = cards?.length as number * 3;
  let left = cards?.length as number * 3;
  

  return (
    <div className="Draw">
        <div className="all">
        {cards?.map(({ id, name }: any) => {
        top -= 3;
        left -= 3;
        return <Card name={name} key = {id}  top = {top} left = {left} removeCard = {removeCards}/>
      })}
        </div>
      
    </div>
  );
}

export default Draw;
