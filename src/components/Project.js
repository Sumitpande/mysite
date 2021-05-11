import React from 'react';


import {PROJECTS} from '../shared/projects';
import ProjectCard from './card'

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  title:{
      textAlign:'center',
  },
  
}));
export default function Project() {
  
  const [projects, setProjects] = React.useState(PROJECTS);
  const classes = useStyles();

  const menu = projects.map((project) => {
    
    return (
        <Grid item xs={12} sm={12} md={4} xl={4} lg={4}>
            <ProjectCard project={project} />
               
        </Grid>
        
       
       
    );
    });
  
  

  return (
    <div className={classes.root}>
        <Divider />
        <br />
        <Typography gutterBottom variant="h3" className={classes.title}>
            Projects
        </Typography>
        <br />
        <Divider />
        <br />
        <Grid container spacing={3}>   
            {menu}           
        
            
        </Grid>
        <br />
        <Divider />
        <br />
        <Typography gutterBottom variant="h3" className={classes.title}>
            Skills
        </Typography>
        <br />
        <Divider />

    </div>

   
  );
}
