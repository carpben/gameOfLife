import React from 'react'
import Drawer from 'material-ui/Drawer';

import {connect} from 'react-redux'
import {toggleAboutDrawer} from '../actions'



const styles = {
   drawerDiv: {
      padding: "50px 30px"
   },
   par: {
      fontSize:18,
      lineHeight:1.4
   },
   tit: {
      marginBottom: 30
   },
   ol: {
      fontSize: 18
   },
   overLay: {
      zIndex:1300
   }
}

// <Drawer  anchor="right" open={true} onClose={toggleAboutDrawer}>

let AboutDrawer = ({toggleAboutDrawer})=> {
   return (
     <Drawer width={450} openSecondary={true} open={true}  docked={false} overlayStyle={styles.overLay}
         onRequestChange={(open) => toggleAboutDrawer()} >
            <div style={styles.drawerDiv}>
               <h2 style={styles.tit} >Welcome to FCC GameOfLife</h2>
               <p style={styles.par}>Game of life modules a population of squares according to a set ground of rules, and an initial state of the board.</p>
               <p style={styles.par}>The app can be usued for two purposes:</p>
               <ol style={styles.ol}>
                  <li >Exploring population of organizems, it's size and distribution over time</li>
                  <li>Creating beautiful patterns</li>
               </ol>
               <p style={styles.par}>The default is set to Conway's rules, which allows for a dynamic long living board. </p>
            </div>
      </Drawer>
   )
}
// <p style={styles.par}>You can log in to save your setting and your current state. </p>


const mapDispatchToProps = (dispatch) => ({
   toggleAboutDrawer: () => dispatch(toggleAboutDrawer())
})


const AboutDrawerContainer = connect(null, mapDispatchToProps)(AboutDrawer)

export default AboutDrawerContainer
