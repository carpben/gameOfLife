import DEFAULT from '../CONSTS'

const getNewBoard = (rows, columns) => {
   let board = []
   for (let i=0 ; i<rows ; i++){
      let row = []
      for (let j=0 ; j<columns ; j++){
         row.push(false)
      }
      board.push(row)
   }
   return board
}



const init = getNewBoard(DEFAULT.ROWS, DEFAULT.COLUMNS)

const board = (state = init, action) => {

   switch (action.type){
      case "CREATE_NEW_BOARD":{
         const newBoard = getNewBoard(action.rows, action.columns)
         return newBoard
      }
      case "POPULATE_RANDOM_BOARD": {
         const rows = state.length
         const columns =state[0].length
         let newBoard = getNewBoard(rows, columns)
         const randomRate = action.randomRate/100
         newBoard = newBoard.map( row => row.map( aliveBol => Math.random()<randomRate? true : false ))
         return newBoard
      }
      case "NEXT_GENERATION": {
         const {bornMin, bornMax, existMin, existMax} = action
         const board = state
         console.log(`bornMin=${bornMin} bornMax=${bornMax} existMin=${existMin} existMax=${existMax}`)
         console.log(`board=${board}`)

         const newBoard = board.map( (row, rowInx) => {
            let newRow = row.map( (alive, colInx) => {
               let counter=0
               const ceil = Math.max(0,rowInx-1)
               const floor = Math.min(board.length-1, rowInx+1)
               for (let i=ceil ; i<=floor ; i++){
                  const leftWall = Math.max(0, colInx-1)
                  const rightWall = Math.min(state[0].length-1, colInx+1)
                  for (let j=leftWall; j<=rightWall ; j++){
                     if (!(i===rowInx && j===colInx))
                     if (board[i][j]) counter++
                  }
               }
               if (alive && (existMin<=counter && counter<=existMax)){
                  return true
               }
               if (!alive && (bornMin<=counter && counter<=bornMax) ){
                  return true
               }
               return false
            });
            return newRow;
         })
         console.log(newBoard)
         return newBoard;
      }
      default:
         return state
   }
}

export default board
