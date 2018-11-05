import React from 'react'; 
import Menu from './Menu'; 
import GameBoard from './GameBoard'; 

import './HotAndCold.css'; 

export default function HotAndCold(){ 
  return (
    <div>
      <Menu/>
      <div className = "board"> 
        <GameBoard/>
      </div>
    </div>
  ); 
}