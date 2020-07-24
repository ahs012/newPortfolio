import React from 'react';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import JobCard from '../JobCard/JobCard';
// import Projects from '../../../Projects.json'

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Typography variant='h1'style={{fontWeight: 'bolder', paddingTop: '10px', paddingBottom:'40px'}}>
            Projects
        </Typography>
      <Container maxWidth="lg" style={{backgroundColor: '#cfe8fc', height:'100vh', paddingLeft: '10%', paddingTop:'10px'}}>
          <JobCard/>
          <JobCard/>
          <JobCard/>
          <JobCard/>
          <JobCard/>
          <JobCard/>
      </Container>
    </React.Fragment>
  );
}