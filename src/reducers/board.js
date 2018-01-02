import OPTIONS from '../CONSTS'

const getNewBoard = (rows, columns) => {
   let board = []
   for (let i=0 ; i<rows ; i++){
      let row = []
      for (let j=0 ; j<columns ; j++){
         row.push(0)
      }
      board.push(row)
   }
   return board
}



const init = getNewBoard(OPTIONS.ROWS.DEFAULT, OPTIONS.COLUMNS.DEFAULT)

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
         newBoard = newBoard.map( row => row.map( aliveBol => Math.random()<randomRate? 1 : 0 ))
         return newBoard
      }
      case "CELL_CLICKED":{
         console.log(14)
         const board = state
         const {rowIndex, colIndex} = action
         return board.map( (row, rowInx) => (
            row.map( (int, colInx) => {
               if (rowInx===rowIndex && colInx===colIndex){
                  return int===0? 1: int===1? 2: 0
               } else {
                  return int
               }
            })
         ))
      }
      case "NEXT_GENERATION": {
         const {bornMin, bornMax, existMin, existMax} = action
         console.log("reducer nextGeneration")
         console.log(`bornMin=${bornMin} bornMax==${bornMax} existMin==${existMin} existMax==${existMax} `)
         const board = state

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
                  return 2
               }
               if (!alive && (bornMin<=counter && counter<=bornMax) ){
                  return 1
               }
               return 0
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
