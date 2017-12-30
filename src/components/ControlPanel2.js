import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import { MenuItem } from 'material-ui/Menu';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
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

class ControlPanel2 extends React.Component {
  state = {
    anchor: 'left',
  };

  handleChange = event => {
    this.setState({
      anchor: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    const { anchor } = this.state;
    console.log("Drawer render")


    return drawer


    // return (
    //   <div className={classes.root}>
    //     <div className={classes.appFrame}>
    //       <AppBar className={classNames(classes.appBar, classes[`appBar-${anchor}`])}>
    //         <Toolbar>
    //           <Typography type="title" color="inherit" noWrap>
    //             Permanent drawer
    //           </Typography>
    //         </Toolbar>
    //       </AppBar>
    //       <main className={classes.content}>
    //         <Typography>{'You think water moves fast? You should see ice.'}</Typography>
    //       </main>
    //       {drawer}
    //     </div>
    //   </div>
    // );
  }
}

ControlPanel2.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlPanel2);
