import React from 'react'
import '../Styles/Header.css'

const Header = ({toggleAboutDrawer}) => (
   <header>
      <div class="inner-w">
         <h1>Experiment with the Game of Life</h1>
         <button type="button" className="btn btn-link about-btn" onClick={toggleAboutDrawer} >About</button>
      </div>
   </header>
)

export default Header
