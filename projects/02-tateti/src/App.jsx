import './App.css'
import {useState, useEffect} from "react" 
import confetti from "canvas-confetti"
import { Square } from './components/Square.jsx'
import {Turns} from './constants.js'
import { checkWinner, checkEndGame } from './Logic/Board.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import { saveGameToStorage, resetGameStorage } from './Logic/Storage/index.js'

function App() {
  const [board,setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
    
  })

  

  const [turn,setTurn] =  useState(() =>{
    const turnFromStorage = window.localStorage.getItem('turn')
    
    return JSON.parse(turnFromStorage)?? Turns.X
  })

  const [winner, setWinner] = useState(null)
  
  
  const resetGame = () =>{
    setBoard(Array(9).fill(null))
    setWinner(null)
    setTurn(Turns.X)

    resetGameStorage()
    
  }


  const updateBoard = (index) =>{
    if(board[index] || winner) return

    const newBoard = [... board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === Turns.X ? Turns.O : Turns.X;
    setTurn(newTurn)
    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })
    
    const newWinner = checkWinner(newBoard)
    if(newWinner){
      confetti()
      setWinner(newWinner)
      
    }else if(checkEndGame(newBoard)){
      setWinner(false)
    }
  }



  return (
    <>
      <main className='board'>
        <h1>Tic Tac Toe</h1>
        <button onClick={resetGame}>Reset del juego</button>
        <section className='game'>
          {
          board.map((_, index) => {
            return(
              <Square 
                key={index} 
                index={index}
                updateBoard={updateBoard} 
                >
                  {board[index]}
                </Square>
            )
          }
          )}
        </section>
        <section className='turn'>
          <Square isSelected={turn === Turns.X}> {Turns.X}</Square>
          <Square isSelected={turn === Turns.O}> {Turns.O}</Square>
        </section>
        <WinnerModal resetGame={resetGame} winner={winner}>

        </WinnerModal>
      </main>
    </>
  )
}

export default App
