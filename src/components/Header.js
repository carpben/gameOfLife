import React from 'react'
import '../Styles/Header.css'

const Header = ({toggleAboutDrawer}) => (
   <header className="App-header">
      <div></div>
         <h1 className="App-title">Game of Life</h1>
         <button type="button" className="btn btn-link about-btn" onClick={toggleAboutDrawer} >About</button>
   </header>
)

export default Header
