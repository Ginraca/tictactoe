import React, { useState } from 'react'
import Tiles from '../Tiles/Tiles'
import './BoardStyle.css'

const Board = () => {
    const [playerTurn, setPlayerTurn] = useState(true)
    const [finished, setFinished] = useState(false)
    const [grid, setGrid] = useState([
        ['-1', '-2', '-3'],
        ['-4', '-5', '-6'],
        ['-7', '-8', '-9']
    ])
    const symbol = playerTurn ? "X" : "O"

    const winCheck = (row, col) => {
        if (grid[0][col] === grid[1][col] && grid[0][col] === grid[2][col] && grid[1][col] === grid[2][col]) {
            return true
        }
        if (grid[row][0] === grid[row][1] && grid[row][0] === grid[row][2] && grid[row][1] === grid[row][2]) {
            return true
        }
        if (row === 1 && col === 1) {
            if (grid[row][col] == grid[row - 1][col - 1] == grid[row + 1][col + 1]) {
                return true
            } else if (grid[row - 1][col + 1] == grid[row + 1][col - 1] == grid[row][col]) {
                return true
            }
        } else if (row === col) {
            for (let i = 1; i < 3; i++ ) {
                if (grid[Math.abs(row - i)][Math.abs(col - i)] != grid[row][col]) {
                    return false
                }
            }
            return true
        } else if (Math.abs(row - col) == 2) {
            for (let i = 1; i < 3; i++ ) {
                if (grid[Math.abs(row - i)][Math.abs(i - col)] != grid[row][col]) {
                    return false
                }
            }
            return true
        }
        return false
    }

    const handlePlayerTurn = (row, col) => {
        let newGrid = grid
        newGrid[row][col] = symbol
        setGrid(newGrid)
        if (winCheck(row, col)) {
            setFinished(true)
        } else {
            setPlayerTurn(!playerTurn)
        }
    }

    return (
    <div className='board-container'>
        <div className='announce'>
            {
                finished ? 
                <p> {symbol} WINS </p> : <></>
            }
        </div>
        <div className='tiles'>
            <Tiles play={symbol} handlePlayerTurn={handlePlayerTurn} row={0} col={0}/>
            <Tiles play={symbol} handlePlayerTurn={handlePlayerTurn} row={0} col={1}/>
            <Tiles play={symbol} handlePlayerTurn={handlePlayerTurn} row={0} col={2}/>
            <Tiles play={symbol} handlePlayerTurn={handlePlayerTurn} row={1} col={0}/>
            <Tiles play={symbol} handlePlayerTurn={handlePlayerTurn} row={1} col={1}/>
            <Tiles play={symbol} handlePlayerTurn={handlePlayerTurn} row={1} col={2}/>
            <Tiles play={symbol} handlePlayerTurn={handlePlayerTurn} row={2} col={0}/>
            <Tiles play={symbol} handlePlayerTurn={handlePlayerTurn} row={2} col={1}/>
            <Tiles play={symbol} handlePlayerTurn={handlePlayerTurn} row={2} col={2}/>
        </div>
    </div>
    )
}

export default Board