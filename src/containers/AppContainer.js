import {connect} from 'react-redux';
import React, { Component } from 'react';
import HeaderContainer from './HeaderContainer.js'
import AboutDrawerContainer from './AboutDrawerContainer'
import ControlPanelContainer from './ControlPanelContainer'
import '../Styles/App.css';
import BoardContainer from './BoardContainer'
import ConsoleContiner from './ConsoleContainer'

class App extends Component {

  render() {

    return (
      <div className="App">
         <HeaderContainer />
         <ControlPanelContainer />
         <ConsoleContiner />
         <BoardContainer />
         {this.props.displayAbout? <AboutDrawerContainer toggleAboutDrawer={this.props.toggleAboutDrawer} /> : "" }

      </div>
    );
  }
}


const mapStateToProps = (state) => ({
   displayAbout: state.display.about
})

const AppContainer = connect(mapStateToProps)(App)





export default AppContainer
