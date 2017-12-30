import React from 'react'
import '../Styles/Board.css'

import {connect} from 'react-redux'

const Row = ({row}) => {
   return (
      <div className="rowrow">

         {
            row.map( (being, inx) => <div className={`cell ${being===2? "adult" : being===1? "young" : ""}`} key={inx}></div> )
         }
      </div>
   )
}

const Board = ({board}) => {
   return (
         <div className="board">
            {board.map( (row, inx) => {
               return <Row row={row} key={inx} />
            } )}
         </div>
   )
}

const mapStateToProps = state => ({
   board:state.board
})

const BoardContainer = connect(mapStateToProps)(Board)



export default BoardContainer;
