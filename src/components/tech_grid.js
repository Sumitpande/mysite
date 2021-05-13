import Typography from '@material-ui/core/Typography';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Grid from '@material-ui/core/Grid';


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



export default function TechGrid(props) {
    const classes = useStyles();

    const render_list = (items) => items.map(item => {
        return (
            <ListItem>
                <ListItemAvatar>
                
                <img className={classes.icon} src={item.image}/>
                </ListItemAvatar>
                <ListItemText primary={item.name} secondary="" />
            </ListItem>
        )
    })
    

    return(
        <Grid item xs={6} sm={4} lg={4}>
            <Typography gutterBottom variant="h6">
                {props.title}
            </Typography>
            {render_list(props.items)}

            
            
        </Grid>
    )
}
