import {connect} from 'react-redux';
import React, { Component } from 'react';
import HeaderContainer from './HeaderContainer.js'

import AboutDrawerContainer from './AboutDrawerContainer'
import ControlPanelContainer from './ControlPanelContainer'
import '../Styles/App.css';
import BoardContainer from './BoardContainer'
import ConsoleContiner from './ConsoleContainer'
// import ControlPanel2 from '../components/ControlPanel2'


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';




class App extends Component {

  render() {


    return (
      <MuiThemeProvider>
         <div className="App">
            <ControlPanelContainer />
            <HeaderContainer />
            <div className="inner-w">

               <ConsoleContiner />
               <BoardContainer />

            </div>
            {this.props.displayAbout? <AboutDrawerContainer toggleAboutDrawer={this.props.toggleAboutDrawer} /> : "" }

         </div>
      </MuiThemeProvider>
    );
  }
}

// App = withStyles(styles)(App)

const mapStateToProps = (state) => ({
   displayAbout: state.display.about
})

const AppContainer = connect(mapStateToProps)(App)





export default AppContainer
