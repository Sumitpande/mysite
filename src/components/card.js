import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import LinkIcon from '@material-ui/icons/Link';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { useRef, useState } from 'react';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CodeIcon from '@material-ui/icons/Code';
import Popover from '@material-ui/core/Popover';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginLeft:20,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ProjectCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [copySuccess, setCopySuccess] = useState('');

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const copyToClipboard = (e) =>{
  
    var copyText = e.target.getAttribute('data-url');
    var textarea = document.createElement("textarea");
    textarea.textContent = copyText;
    textarea.style.position = "fixed"; // Prevent scrolling to bottom of page in MS Edge.
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy"); 
    
    setCopySuccess('Copied to Clipboard!');
    handleClick(e);
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.project.name}
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image={props.project.image}
        title={props.project.name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        {props.project.name}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Code">
          <a href={props.project.code} target="blank">
            <CodeIcon />
          </a>
          
        </IconButton>
        <IconButton aria-label="site">
          <a href={props.project.site} target="blank">
            <LinkIcon />
          </a>
          
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon data-clipboard-text={props.project.code} data-url={props.project.code} onClick={copyToClipboard} />
        </IconButton>
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
        >
          <Typography className={classes.typography}>{copySuccess}</Typography>
        </Popover>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>
          {props.project.description}
          </Typography>
        
        </CardContent>
      </Collapse>
    </Card>
  );
}
