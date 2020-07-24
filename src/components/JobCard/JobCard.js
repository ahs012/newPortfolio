import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 300,
    maxWidth: 345,
    float: 'left',
    margin: 10
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

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const jobs = {
      Fastmind: {
          Title: 'Fastmind',
          Icon: '',
          Image: '../assets/Dr.-Momy-Green_TriColor.png',
          Sumary: 'Development team intern. ',
          Technologies: 'React.JS, Material-UI, MobX, AWS, Styled-Components, Jest, Enzyme',
          Other: 'Accessibility & Semantics, Sourcetree',
          Link: 'https://www.fastmind.io/',
          Experience: 'During my time at The Fastmind I worked along with the Development team with............'
      }
  }
  const projects = {
      DrMommyGreen: {

      },
      BingoBongo: {

      },
      JewelCollector: {

      },
      Giftastic: {

      },
      LiriNodeApp: {
          
      },
      Bamazon: {

      },
      TrainScheduler: {

      },
      ClickyGame: {

      },
      BooksReactApp: {

      },
      Hangman: {

      },
      MoreToCome: {

      }
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="project" className={classes.avatar}>
            F
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={jobs.Fastmind.Title}
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {jobs.Fastmind.Sumary}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
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
          <Typography variant='h3'>Experience</Typography>
          <Typography paragraph>
            {jobs.Fastmind.Experience}
          </Typography>
          <Typography variant='h3'>Technologies</Typography>
          <Typography paragraph>
            {jobs.Fastmind.Technologies}
          </Typography>
          <Typography variant='h3'>Other</Typography>
          <Typography paragraph>
            {jobs.Fastmind.Other}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
