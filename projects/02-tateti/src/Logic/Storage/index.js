export const saveGameToStorage = ({board, turn}) => {
    window.localStorage.setItem('turn', JSON.stringify(turn))
    window.localStorage.setItem('board', JSON.stringify(board))
}

export const resetGameStorage = () =>{
    window.localStorage.removeItem('turn')
    window.localStorage.removeItem('board')
}