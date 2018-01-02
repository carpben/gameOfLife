import React from 'react'
import '../Styles/Board.css'
import {cellClicked} from '../actions'

import {connect} from 'react-redux'

const Row = ({row, rowIndex, cellClicked}) => {
   return (
      <div className="rowrow">

         {
            row.map( (being, colIndex) => (
               <div className={`cell ${being===2? "adult" : being===1? "young" : ""}`}
                  onClick={ () =>{
                     console.log(11)
                     return cellClicked(rowIndex, colIndex)
                  }}  key={colIndex}>
               </div>
            ))
         }
      </div>
   )
}

const Board = ({board, adultColor, cellClicked}) => {
   return (
         <div className={`board adult-color-${adultColor}`}>
            {board.map( (row, rowIndex) => {
               return <Row row={row} rowIndex={rowIndex} cellClicked={cellClicked} key={rowIndex}/>
            } )}
         </div>
   )
}

const mapDispatchToProps = dispatch => ({
   cellClicked: (rowIndex, colIndex) => {
      console.log(12)
      return dispatch(cellClicked(rowIndex, colIndex))
   }
})

const mapStateToProps = state => ({
   board:state.board,
   adultColor: state.settings.adultColor
})

const BoardContainer = connect(mapStateToProps, mapDispatchToProps)(Board)



export default BoardContainer;
