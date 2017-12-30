import {connect} from 'react-redux';
import React, { Component } from 'react';
import HeaderContainer from './HeaderContainer.js'
import AboutDrawerContainer from './AboutDrawerContainer'
import ControlPanelContainer from './ControlPanelContainer'
import '../Styles/App.css';
import BoardContainer from './BoardContainer'
import ConsoleContiner from './ConsoleContainer'
// import ControlPanel2 from '../components/ControlPanel2'

import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';

const mailFolderListItems = [<li>hello</li>, <li>hello</li>,<li>hi</li>]

const otherMailFolderListItems= [<li>goodBye</li>, <li>bye</li>,<li>byebye</li>]
const drawerWidth = 240;

const styles = theme => ({
  root: {
    width: '100%',
    height: 430,
    marginTop: theme.spacing.unit * 3,
    zIndex: 1,
    overflow: 'hidden',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  appBar: {
    position: 'absolute',
    width: `calc(100% - ${drawerWidth}px)`,
  },
  'appBar-left': {
    marginLeft: drawerWidth,
  },
  'appBar-right': {
    marginRight: drawerWidth,
  },
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: drawerWidth,
  },
  drawerHeader: theme.mixins.toolbar,
  content: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    padding: theme.spacing.unit * 3,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
});







class App extends Component {

  render() {
     const drawer = (
      <Drawer
         type="permanent"
         classes={{
          paper: this.props.classes.drawerPaper,
         }}
         anchor="left"
      >
         <div className={this.props.classes.drawerHeader} />
         <Divider />
         <List>{mailFolderListItems}</List>
         <Divider />
         <List>{otherMailFolderListItems}</List>
      </Drawer>
     );

    return (
      <div className="App">
         {drawer}
         <div>
            <HeaderContainer />
            <ControlPanelContainer />
            <ConsoleContiner />
            <BoardContainer />
            {this.props.displayAbout? <AboutDrawerContainer toggleAboutDrawer={this.props.toggleAboutDrawer} /> : "" }
         </div>
      </div>
    );
  }
}

App = withStyles(styles)(App)

const mapStateToProps = (state) => ({
   displayAbout: state.display.about
})

const AppContainer = connect(mapStateToProps)(App)





export default AppContainer
