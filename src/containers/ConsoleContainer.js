import React from 'react'
import {connect} from 'react-redux'
import '../Styles/Console.css'

const Console = ({running, generation}) => {
   let message = running? `Generation: ${generation}` : "You can click cells to populate or depopulate them."
   return (
      <section className="Console">
         <p>{message}</p>
      </section>
   )
}

const mapStateToProps = state => ({
   running: state.current.running,
   generation: state.current.generation
})

const ConsoleContiner = connect(mapStateToProps)(Console)

export default ConsoleContiner
