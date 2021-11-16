import Button from '@material-ui/core/Button';
import React from 'react';
import sp from '../images/sp.jpg'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: '2%',
    maxWidth: '100%',
  },
  image: {
    width: 268,
    height: 268,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '80%',
    maxHeight: '80%',
    borderRadius: '50%',
    
  },
  link:{
    textDecoration:'None',
  },
}));

export default function Me() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="sumit pande" src={sp} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h3">
                  Hey There!<br />I'm Sumit Pande
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Developer
                </Typography>
                <Typography variant="body1" >
                Aiming
                to leverage proven communication,<br />
                leadership, and technical skills to
                successfully fill the Developer role in good firm.
                </Typography>
              </Grid>
              <Grid item>
              <a className={classes.link} target='blank' href='https://www.canva.com/design/DAEUzCrRnEE/XN09MK3TyaTnaHUULNsCuQ/view?utm_content=DAEUzCrRnEE&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton'>

                <Button variant="outlined" color="secondary">
                  Resume
                    
                </Button></a>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                  
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
