import React from 'react'
import Drawer from 'material-ui/Drawer';

import {connect} from 'react-redux'
import {toggleAboutDrawer} from '../actions'



const styles = {
   drawerDiv: {
      padding: 50
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
   },
   footer: {
      marginTop:50
   }
}

// <Drawer  anchor="right" open={true} onClose={toggleAboutDrawer}>

let AboutDrawer = ({toggleAboutDrawer})=> {
   return (
     <Drawer width={450} openSecondary={true} open={true}  docked={false} overlayStyle={styles.overLay}
         onRequestChange={(open) => toggleAboutDrawer()} >
            <div style={styles.drawerDiv}>
               <h2 style={styles.tit} >Welcome!!</h2>
               <p style={styles.par}>The Game of life modules a surface on which organizems have a potential to live. Each colored cell represents a living organizem, and then next generation is determined by the choosen set of rules. </p>
               <p style={styles.par}>The app can be usued for two purposes:</p>
               <ol style={styles.ol}>
                  <li >Exploring population of organizems, it's size and distribution over time</li>
                  <li>Creating beautiful patterns</li>
               </ol>
               <p style={styles.par}>The default is set to Conway's rules, which allows for a dynamic long living board. </p>
               <p style={styles.par}>At Present the app is build for desktop display only.</p>
               <p style={styles.par}>My Name is Ben Carp and I created this app as part of the FCC (FreeCodeCamp) curriculam. I'd love your feedback. You are welcome to <a href="mailto:bccarp@gmail.com"> message me directly</a>, or leave your feedback on <a href="https://github.com/carpben/gameOfLife/issues">Github</a></p>
               <footer style={styles.footer}>
                  <small>Build with: React, Redux, React-Redux, Material-Ui, Firebase and more</small>
               </footer>
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
