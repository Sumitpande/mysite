import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop:10,
    backgroundColor:'#1f194d',
    
  },
  icon: {
      height:50,
      width:50,
      color:'#ffffff',
  }
  
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
        <br />
      <Grid container 
            color="primary"
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}>
        <Grid item >
          <a href="https://github.com/Sumitpande" target="blank">
            <GitHubIcon className={classes.icon} />
          </a>
        </Grid>
        <Grid item >
          <a href="https://linkedin.com/in/sumit-pande" target="blank">
            <LinkedInIcon className={classes.icon} />
          </a>
        </Grid>
        <Grid item >
          <a href="https://twitter.com/sumitpande_" target="blank">
            <TwitterIcon className={classes.icon} />
          </a>
          
        </Grid>
        <Grid item >
          <a href="https://instagram.com/sumyaa22" target="blank">
            <InstagramIcon className={classes.icon} />
          </a>
                    
        </Grid>
        
      </Grid>
    </div>
  );
}
