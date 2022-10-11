import React from 'react'
import "./Reset.css"
export const Reset = ({resetBoard}) => {
  return (
    <div>
        <button className='reset-btn' onClick={resetBoard}>Restart</button>
    </div>
  )
}
