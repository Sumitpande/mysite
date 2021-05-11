
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
{/* <img src="https://img.icons8.com/ios-filled/50/000000/html-5.png"/>
<img src="https://img.icons8.com/ios-filled/50/000000/css3.png"/>
<img src="https://img.icons8.com/ios-filled/50/000000/python.png"/>
<img src="https://img.icons8.com/ios-filled/50/000000/java-coffee-cup-logo.png"/>
<img src="https://img.icons8.com/ios-filled/50/000000/javascript.png"/>
<img src="https://img.icons8.com/ios-filled/50/000000/c-plus-plus-logo.png"/>

<img src="https://img.icons8.com/fluent/48/000000/github.png"/>
<img src="https://img.icons8.com/material-rounded/24/000000/adobe-photoshop.png"/>


<img src="https://img.icons8.com/color/48/000000/bootstrap.png"/>
<img src="https://img.icons8.com/windows/32/000000/django.png"/> */}

const useStyles = makeStyles((theme) => ({
  root: {
    
    maxWidth: '100%',
    margin:'2%',
    backgroundColor: theme.palette.background.paper,
  },
  icon:{
      maxHeight:40,
      maxWidth:40,

  },
}));

export default function Tech() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
        <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <Typography gutterBottom variant="h6">
                Languages
            </Typography>
            <ListItem>
            <ListItemAvatar>
            <img className={classes.icon} src="https://img.icons8.com/color/96/000000/python.png"/>
            
            </ListItemAvatar>
            <ListItemText primary="Python" secondary="" />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                <img className={classes.icon} src="https://img.icons8.com/color/96/000000/java-coffee-cup-logo.png"/>
                
                </ListItemAvatar>
                <ListItemText primary="Java" secondary="" />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                <img className={classes.icon} src="https://img.icons8.com/color/96/000000/javascript.png"/>
                
                </ListItemAvatar>
                <ListItemText primary="JavaScript" secondary="" />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                <img className={classes.icon} src="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"/>
                
                </ListItemAvatar>
                <ListItemText primary="C C++" secondary="" />
            </ListItem>
            
          </Grid>
          <Grid item  xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h6">
                  Technologies
                </Typography>
                <ListItem>
                    <ListItemAvatar>
                    
                    <img className={classes.icon} src="https://img.icons8.com/ios-filled/50/000000/github.png"/>
                    </ListItemAvatar>
                    <ListItemText primary="GitHub" secondary="" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <img className={classes.icon} src="https://img.icons8.com/color/48/000000/adobe-photoshop.png"/>
                    
                    </ListItemAvatar>
                    <ListItemText primary="Photoshop" secondary="" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <img className={classes.icon} src="https://img.icons8.com/color/48/000000/html-5.png"/>
                    
                    </ListItemAvatar>
                    <ListItemText primary="HTML5" secondary="" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <img className={classes.icon} src="https://img.icons8.com/color/48/000000/css3.png"/>
                    
                    </ListItemAvatar>
                    <ListItemText primary="CSS3" secondary="" />
                </ListItem>
              </Grid>
              
            </Grid>
            <Grid item>
                <Typography gutterBottom variant="h6">
                  Frameworks
                </Typography>
                <ListItem>
                    <ListItemAvatar>
                    <img className={classes.icon} src="https://img.icons8.com/windows/64/129C5C/django.png"/>
                    
                    </ListItemAvatar>
                    <ListItemText primary="Django" secondary="" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <img className={classes.icon} src="https://img.icons8.com/color/96/000000/react-native.png"/>
                    </ListItemAvatar>
                    <ListItemText primary="Reactjs" secondary="" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <img className={classes.icon} src="https://img.icons8.com/color/48/000000/bootstrap.png"/>
                    </ListItemAvatar>
                    <ListItemText primary="Bootstrap4" secondary="" />
                </ListItem>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      
    </List>
  );
}


