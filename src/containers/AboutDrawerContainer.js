import {connect} from 'react-redux'
import {toggleAboutDrawer} from '../actions'

import React from 'react'
import Drawer from 'material-ui/Drawer';
import { withStyles } from 'material-ui/styles';

const styles = {
   drawerDiv: {
      width:450,
      padding: "50px 30px"
   },
   par: {
      fontSize:18,
      lineHeight:1.4
   },
   tit: {
      marginBottom: 30
   }
}

let AboutDrawer = ({toggleAboutDrawer, classes})=> {
   return (
      <Drawer  anchor="right" open={true} onClose={toggleAboutDrawer}>

            <div className={classes.drawerDiv}>
               <h2 className={classes.tit}>Welcome to FCC GameOfLife</h2>
               <p className={classes.par}>Game of life modules a population of squares according to a set ground of rules, and an initial state of the board.</p>
               <p className={classes.par}>The default is set to Conway's rules, which allows for a dynamic long living board. </p>
               <p className={classes.par}>You can log in to save your setting and your current state. </p>
            </div>
      </Drawer>
   )
}

AboutDrawer = withStyles(styles)(AboutDrawer)

const mapDispatchToProps = (dispatch) => ({
   toggleAboutDrawer: () => dispatch(toggleAboutDrawer())
})


const AboutDrawerContainer = connect(null, mapDispatchToProps)(AboutDrawer)

export default AboutDrawerContainer
