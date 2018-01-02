import React from 'react'
import {connect} from 'react-redux'
import '../Styles/Console.css'
import Paper from 'material-ui/Paper';

const style = {
   paper: {
      margin: "25px 0",
      width: 750,
      padding: 15
   },
   par: {
      margin:0
   }
};


const Console = ({running, generation}) => {
   let message = running? `Generation: ${generation}` : "You can click cells to populate or depopulate them."
   return (
      <Paper style={style.paper} zDepth={2} >
         <div>
            <p style={style.par}>{message}</p>
         </div>
      </Paper>

   )
}

const mapStateToProps = state => ({
   running: state.current.running,
   generation: state.current.generation
})

const ConsoleContiner = connect(mapStateToProps)(Console)

export default ConsoleContiner
