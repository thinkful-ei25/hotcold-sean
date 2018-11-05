import React from 'react'; 

import Temperature from './Temperature'; 
import GameForm from './GameForm'; 
import Guesses from './Guesses'; 

import './InnerGameBoard.css'; 

export default function InnerGameBoard(){ 
  return (
    <div className ="inner-game-board"> 
      <Temperature/>
      <GameForm/>
      <Guesses/>
    </div>
  ); 
}