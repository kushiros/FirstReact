import { Winner_Combos } from "../constants"
export const checkWinner = (boardToCheck) => {
    for (const combo of Winner_Combos){
      const [a,b,c] = combo
      if(boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[b] === boardToCheck[c]){
        
        return boardToCheck[a]
      }
    }
  }

  export const checkEndGame = (newBoard) => {
    return newBoard.every((Square) => Square != null)
  }