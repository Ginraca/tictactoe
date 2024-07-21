import React, { useState } from 'react'
import './TilesStyle.css'

const Tiles = ({ play, handlePlayerTurn, row, col }) => {
  const [symbol, setSymbol] = useState("")

  const handleSymbol = (row, col) => {
    setSymbol(play)
    handlePlayerTurn(row, col)
  }
  return (
    <div className='tile-container' onClick={() => handleSymbol(row, col)}>
      {symbol}
    </div>
  )
}

export default Tiles