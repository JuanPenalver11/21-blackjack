
import './App.css';
import Card from './img/cards.png';
import React, {useEffect, useState}  from 'react';

function App() {

  const [cards, setCards] = useState([])
  const [sum, setSum] = useState(0)
  const [active, setActive] = useState(false)
  const [blackJack, setBlackJack] = useState(false)
  const [message, setMessage] = useState("Fancy a game")



  function getRandomCard(){
   return Math.floor(Math.random()*13) + 1
  }

  function startGame (){
    setActive(prevActive =>!prevActive)
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    setCards([firstCard, secondCard])
    setSum(firstCard + secondCard)

  }

  function newCard(){
    let nCard = getRandomCard()

    setCards(prevCards => [...prevCards, nCard])
    setSum( prevSum => prevSum + nCard)
  }

  

  useEffect(()=>{
    if(sum === 0){
      setMessage("Fancy a game?")
    }
    else if (sum <= 20) {
      setMessage("Do you want to draw a new card?") 
  } else if (sum === 21) {
    setBlackJack(!blackJack)
      setMessage("You've got Blackjack!")
  } else {
    setActive(!active)
      setMessage("You're out of the game!")
  }
  },[sum])


  
  return (
    <div className="App">
      <h1 className="title-game">
        21 BlackJack
        <img src={Card} alt="card-poker" className="icon" />
      </h1>
      <h3 className="sub-title-game">Feeling lucky 😏 </h3>
      <p className="status-phrase"> {message} </p>
      <p className="cards-display"> Cards :{(" ") + cards.join(' ')}</p>
      <p className="cards-sum-display">Sum : {sum}</p>
      <button className="btn-start" onClick={startGame}>
        Start Game
      </button>
      <button className="btn-new-card" onClick={newCard} disabled={!active || blackJack}>
        New Card
      </button>
    </div>
  );
}

export default App;
