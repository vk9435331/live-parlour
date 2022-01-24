import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { IconButton } from '@mui/material';

import {
  FacebookOutlined,
  Instagram,
  Twitter,
  WhatsApp,
} from '@mui/icons-material';

function Copyright() {
  return (
    <Typography variant='body2' color='text.secondary'>
      {'Copyright © '}
      <Link color='inherit' href='https://mui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  return (
    <center>
      {' '}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          // minHeight: '100vh',
        }}
      >
        <CssBaseline />
        <div>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d114033.31764448129!2d88.39528610000004!3d26.7271012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1640353932514!5m2!1sen!2sin'
            title='google-map'
            width='100%'
            height='450'
            frameBorder='0'
            allowFullScreen=''
            aria-hidden='false'
            tabIndex='0'
          ></iframe>
        </div>
        <Container component='main' sx={{ mt: 8, mb: 2 }} maxWidth='sm'>
          <Typography variant='h2' component='h1' gutterBottom>
            Address
          </Typography>
          <div>
            {/* address add */}
            <h3>loream ipsum ...</h3>
          </div>
          <Typography variant='h5' component='h2' gutterBottom>
            Follow us on social media
          </Typography>
          {/* //add  social iocns */}
          <IconButton aria-label='add to favorites'>
            <FacebookOutlined />
          </IconButton>
          <IconButton aria-label='add to favorites'>
            <Twitter />
          </IconButton>
          <IconButton aria-label='add to favorites'>
            <WhatsApp />
          </IconButton>
          <IconButton aria-label='add to favorites'>
            <Instagram />
          </IconButton>
        </Container>
        <Box
          component='footer'
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: theme =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <Container maxWidth='sm'>
            <Typography variant='body1'>all Copyright are reserved</Typography>
            <Copyright />
          </Container>
        </Box>
      </Box>
    </center>
  );
}
