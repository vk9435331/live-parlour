import React from 'react';
import { makeStyles } from '@mui/styles';
const About = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.AboutSection}>
        <h1>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>
          Resize the browser window to see that this page is responsive by the
          way.
        </p>
      </div>
      <h2 style={{ textAlign: 'center' }}>Our Team</h2>
      <div className={classes.row}>
        <div className={classes.column}>
          <div className={classes.card}>
            <img
              src='https://picsum.photos/200/300/?random'
              alt='Jane'
              style={{ height: 150, width: 150 }}
            />
            <div className={classes.container}>
              <h2>Vijay</h2>
              <p className='title'>CEO &amp; Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
              <p>
                <button className={classes.button}>Contact</button>
              </p>
            </div>
          </div>
        </div>
        <div className={classes.column}>
          <div className={classes.card}>
            <img
              src='https://picsum.photos/500/300/?random'
              alt='Mike'
              style={{ height: 150, width: 150 }}
            />
            <div className={classes.container}>
              <h2>Krishna</h2>
              <p className='title'>Art Director</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>mike@example.com</p>
              <p>
                <button className={classes.button}>Contact</button>
              </p>
            </div>
          </div>
        </div>
        <div className={classes.column}>
          <div className={classes.card}>
            <img
              src='https://picsum.photos/200/500/?random'
              alt='John'
              style={{ height: 150, width: 150 }}
            />
            <div className={classes.container}>
              <h2>Rajeev</h2>
              <p className='title'>Designer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>john@example.com</p>
              <p>
                <button className={classes.button}>Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* //add contact card */}
      <div>
        <h2 style={{ textAlign: 'center' }}>Contact Us</h2>
        <div className={classes.row}>
          <div className={classes.column}>
            <div className={classes.card}>
              <div className={classes.container}>
                <h2>Phone Number</h2>
                <p>91********99 </p>
                <p> available to Pick Call 3:00 A.M to 6:30 P.M </p>
                <h2>Email</h2>
                <p>Vijay******@gmail.com </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const useStyles = makeStyles({
  AboutSection: {
    padding: '50px',
    textAlign: 'center',
    backgroundColor: '#f4f4f4',
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  column: {
    flex: '50%',
    padding: '20px',
  },
  card: {
    backgroundColor: '#f4f4f4',
    padding: '20px',
    margin: '10px',
    boxShadow:
      '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  },
  container: {
    textAlign: 'center',
  },

  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
    width: '100%',
  },
});
export default About;
