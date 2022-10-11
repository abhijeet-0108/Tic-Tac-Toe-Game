import React from 'react'
import "./Score.css"
const Score = ({score,xplaying}) => {
    const{xscore,oscore}=score;
  return (
    <div className='score-board'>
        <span className={`score x-score ${!xplaying && "inactive"}`}>X -{xscore}</span>
        <span className={`score o-score ${xplaying && "inactive"}`}>O -{oscore}</span>

    </div>
  )
}

export default Score