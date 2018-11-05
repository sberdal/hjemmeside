import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/es/Grid/Grid';
import { authentication } from './index';

const drawerWidth = 240;

const styles = theme => ({
  root : {
    display : 'flex',
  },
  appBar : {
    zIndex : theme.zIndex.drawer + 1,
    transition : theme.transitions.create([ 'width', 'margin' ], {
      easing : theme.transitions.easing.sharp,
      duration : theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift : {
    marginLeft : drawerWidth,
    width : `calc(100% - ${drawerWidth}px)`,
    transition : theme.transitions.create([ 'width', 'margin' ], {
      easing : theme.transitions.easing.sharp,
      duration : theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton : {
    marginLeft : 12,
    marginRight : 36,
  },
  hide : {
    display : 'none',
  },
  drawerPaper : {
    position : 'relative',
    whiteSpace : 'nowrap',
    width : drawerWidth,
    transition : theme.transitions.create('width', {
      easing : theme.transitions.easing.sharp,
      duration : theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose : {
    overflowX : 'hidden',
    transition : theme.transitions.create('width', {
      easing : theme.transitions.easing.sharp,
      duration : theme.transitions.duration.leavingScreen,
    }),
    width : theme.spacing.unit * 7,
    [ theme.breakpoints.up('sm') ] : {
      width : theme.spacing.unit * 9,
    },
  },
  toolbar : {
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'flex-end',
    padding : '0 8px',
    ...theme.mixins.toolbar,
  },
  content : {
    flexGrow : 1,
    padding : theme.spacing.unit * 3,
  },
});

class Menu extends React.Component {

  state = {
    open : false,
  };

  handleDrawerOpen = () => {
    this.setState({ open : true });
  };

  handleDrawerClose = () => {
    this.setState({ open : false });
  };

  logInHandler() {
    authentication.login();
  }

  render() {
    const { classes, theme} = this.props;
    const labels = this.props.labels.labels.menu;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="absolute"
          className={classNames(classes.appBar, {
            [ classes.appBarShift ] : this.state.open,
          })}
        >
          <Toolbar disableGutters={!this.state.open}>
            <Grid
              container
              alignItems={'center'}
              spacing={24}
            >
              <Grid item>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={this.handleDrawerOpen}
                  className={classNames(classes.menuButton, {
                    [ classes.hide ] : this.state.open,
                  })}
                >
                  <ChevronRightIcon />
                </IconButton>
              </Grid>
              <Grid item style={{ flex : 1 }}>
                <Typography variant="h6" color="inherit" noWrap id="page_title">
                  Home
                </Typography>
              </Grid>
              <Grid item>
                <Button color="inherit" onClick={this.logInHandler.bind(this)}>
                  Login
                </Button>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Drawer
          anchor="right"
          variant="permanent"
          classes={{
            paper : classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem button key={labels.home} component={Link} to="/home">
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText primary={labels.home} />
            </ListItem>
            <ListItem button key={labels.chess} component={Link} to="/chess">
              <ListItemIcon className={classNames(classes.icon, 'fas fa-chess')} style={{ fontSize : 26 }} />
              <ListItemText primary={labels.chess} />
            </ListItem>
          </List>
          <Divider />
          <List>
            {[ 'All mail', 'Trash', 'Spam' ].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </div>
    );
  }
}

Menu.propTypes = {
  classes : PropTypes.object.isRequired,
  theme : PropTypes.object.isRequired,
  labels : PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme : true })(Menu);