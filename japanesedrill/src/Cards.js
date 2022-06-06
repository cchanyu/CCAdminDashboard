import React, { useEffect, useState } from 'react'
import TCard from 'react-tinder-card'
import './Cards.css'
import axios from './axios'; // local axios file we created

function Cards() {
    const [ vocab, setVocab ] = useState([]);

    // 2nd [] is important, because if we put [frontside], 
    // it'll rerun whenever there's change to frontside
    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/japanesedrill/card')

            setVocab(req.data);
        }

        fetchData();
    }, [])

    console.log(vocab)

    const swiped = (direction, cardtoDelete) => {
        console.log("removing: " + cardtoDelete)
        // setLastDirection(direction);
    }

    const outOfFrame = (card) => {
        console.log(card + "left the screen!")
    }

  return (
    <div className='cards'>
        <div className='cards__cardContainer'>
            {vocab.map((word) => (
                <TCard
                    className='swipe'
                    key={word.frontside}
                    preventSwipe={["up","down"]}
                    onSwipe={(dir) => swiped(dir, word.frontside)}
                    onCardLeftScreen={() => outOfFrame(word.frontside)}
                >
                    <div
                        style={{ backgroundImage: `url(${word.text})`}} /* inline styling, meaning inside of js, not css */
                        className="card"
                    >
                        <h3>{word.frontside}</h3>
                    </div>
                </TCard>
            ))}
        </div>
    </div>
  )
}

export default Cards