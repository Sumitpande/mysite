
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
import TechGrid from './tech_grid';
import {TECHLIST} from '../shared/tech_list';
import {Languages} from '../shared/languages';
import {Frameworks} from '../shared/framework_list';


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
  list:{
    marginLeft:10,
  },
}));

export default function Tech() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
        <Paper className={classes.paper}>
        <Grid container spacing={2} className={classes.list}>
          <TechGrid {...Languages} />
          <TechGrid {...TECHLIST} />
          
          <Grid item  xs={12} sm >
            {/* <Grid item xs container direction="column" spacing={2}>
              <TechGrid {...TECHLIST} />
            </Grid> */}
            <TechGrid {...Frameworks} />
          </Grid>
        </Grid>
      </Paper>
      
    </List>
  );
}


