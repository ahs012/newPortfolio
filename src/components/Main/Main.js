import React from 'react';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import ExperienceCard from '../ExperienceCard/ExperienceCard';

export default function SimpleContainer() {
    const jobs = {
        Fastmind: {
            Title: 'Fastmind',
            Icon: '',
            Image: '',
            Summary: 'Development team intern. ',
            Technologies: 'React.JS, Material-UI, MobX, AWS, Styled-Components, Jest, Enzyme',
            Other: 'Accessibility & Semantics, Sourcetree',
            Link: 'https://www.fastmind.io/',
            Experience: 'During my time at The Fastmind I worked along with the Development team with............',
            date: 'October 2019'
        },
        DrMommyGreen: {
            Title: 'Dr.MommyGreen',
            Icon: '',
            Image: '../assets/Dr.-Momy-Green_TriColor.png',
            Summary: 'Publishing Author website for book sales and press releases',
            Technologies: 'Webflow, eCommerce, SEO',
            Other: 'Other',
            Link: 'https://www.drmommygreen.com/',
            Experience: 'This was a freelance job I picked up during the Quarantine. The technology picked to provide the type of product the client desired, an eCommerce site, with ease of maintenance and updating.',
            date: 'Quarantine 2020'
        }
    }

  return (
    <React.Fragment>
      <CssBaseline />
      <Typography variant='h1'style={{fontWeight: 'bolder', paddingTop: '10px', paddingBottom:'40px'}}>
            Experience
        </Typography>
      <Container maxWidth="lg" style={{backgroundColor: '#cfe8fc', height:'80vh', paddingTop:'10px'}}>
      <ExperienceCard
        title={jobs.Fastmind.Title}
        Summary={jobs.Fastmind.Summary}
        Technologies={jobs.Fastmind.Technologies}
        Other={jobs.Fastmind.Other}
        Experience={jobs.Fastmind.Experience}
        />
        <ExperienceCard
        title={jobs.DrMommyGreen.Title}
        Summary={jobs.DrMommyGreen.Summary}
        Technologies={jobs.DrMommyGreen.Technologies}
        Other={jobs.DrMommyGreen.Other}
        Experience={jobs.DrMommyGreen.Experience}
        />
      </Container>
    </React.Fragment>
  );
}