import React from 'react'; 

import InnerGameBoard from './InnerGameBoard'; 

import './GameBoard.css'; 

export default function GameBoard(){ 
  return (
    <div className="gameboard" > 
      <h2>"GAME BOARD</h2>
      <div> 
        <InnerGameBoard/>
      </div>
    </div>
  ); 
}