import React from 'react'
import '../css/Cards.css';
import { CardsData } from '../data/data';
import Card from './Card';

const Cards = () => {
  return (
    <div className='cards'>
        {CardsData.map((card, id) => {
            return (
                <div className="cards--parentContainer">
                    <Card
                    title = {card.title}
                    color = {card.color}
                    barValue = {card.barValue}
                    value = {card.value}
                    png = {card.png}
                    series = {card.series}
                    />
                </div>
            )
        })}
    </div>
  )
}

export default Cards