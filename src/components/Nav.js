import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import logo from './lo.png'
function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });
  

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
    '@global': {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
    },
    appBar: {
      borderBottom: `2px solid ${theme.palette.divider}`,
      backgroundColor:"#6d1bcc",
    },
    toolbar: {
        flexWrap: 'wrap',
      },
      toolbarTitle: {
        flexGrow: 1,
      },
    link: {
        margin: theme.spacing(1, 1.5),
      },
      logo:{
          height:60,
          width:60,
      }

    }))

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Nav(props) {
    const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className={classes.appBar} >
          <Toolbar className={classes.toolbar} >
            <img className={classes.logo}  src={logo} />
            <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                Sumit
            </Typography>
            <nav>
                <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                Features
                </Link>
                <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                Enterprise
                </Link>
                <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                Support
                </Link>
            </nav>
            
            </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      
    </React.Fragment>
  );
}
