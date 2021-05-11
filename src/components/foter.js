import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import purple from '@material-ui/core/colors/purple';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop:10,
    backgroundColor:'#6d1bcc',
    
  },
  icon: {
      height:50,
      width:50,
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
          <GitHubIcon className={classes.icon} />
        </Grid>
        <Grid item >
          <LinkedInIcon className={classes.icon} />
        </Grid>
        <Grid item >
          <TwitterIcon className={classes.icon} />
        </Grid>
        <Grid item >
          <WhatsAppIcon className={classes.icon} />
        </Grid>
        
      </Grid>
    </div>
  );
}
