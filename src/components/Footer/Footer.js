import React from 'react';
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import Icon from '@material-ui/core/Icon';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      display: 'none'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  
  export default function Footer() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
          <Container>
              <Typography>
                  Connect with me:
              </Typography>
            <Container>
                <GitHubIcon/>
                <Icon>Star</Icon>
                <IconButton>E-mail</IconButton>
                <IconButton/>
            </Container>
          </Container>
      </div>
    );
  }
