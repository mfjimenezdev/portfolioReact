import { useState } from 'react';
import './contact.css';
import emailjs from 'emailjs-com';
import { makeStyles, Card, CardHeader, CardContent } from '@material-ui/core';
import { Grid, TextField, Fab, Slide, Paper } from '@material-ui/core';
import { Send } from '@material-ui/icons';
import mail_ok from '../../assets/images/contact/mail_ok.svg';
import mail_ko from '../../assets/images/contact/mail_ko.svg';
import Particles from 'react-particles-js';
import ParticlesConfigBG from '../../assets/scripts/configParticlesBG';

// MaterialUI Styling
const useStyles = makeStyles({
  textfields: {
    width: "60vw",
    ["@media (min-width: 1000px)"]: { // eslint-disable-line no-useless-computed-key
      width: "30vw",
    },

    "& .MuiFormLabel-root": {
      color: "white",
    },
    
    "& .MuiOutlinedInput-root": {
      "& input": {
        color: "white",
      },

      "& textarea": {
        color: "white",
      },

      "& fieldset": {
        borderColor: "#A71212",
        borderWidth: "2px",
      },

      "&:hover fieldset": {
        borderColor: "#A71212",
      },

      "&.Mui-focused fieldset": {
        borderColor: "#A71212 !important",
      },

    },

  },
});
// -----------------------------------

function Contact() {
  document.body.className = 'contact-body';
  const classes = useStyles();

  const [state, setState] = useState({
    open: false,
    resIco: false,
  });

  function sendEmail(event) {
    event.preventDefault();

    emailjs.sendForm('service_i7oahqs', 'mfjimenez.dev/contact', event.target, 'user_BOlsdGwC5LQKdJF55mofz').then((res) => {
      setState({resIco: true, open: true});
      setTimeout(() => { setState({resIco: true, open: false}) }, 1500);
    }, (err) => {
      setState({resIco: false, open: true});
      setTimeout(() => { setState({resIco: false, open: false}) }, 2000);
    });
  }

  return (
    <div className="contact-container">
      <Card className="contact-card">
        <CardHeader title="CONTACT ME !" style={{color:"white"}}/>
        <CardContent>
          <form className="contact-form" autoComplete="off" onSubmit={sendEmail}>
            <Grid container direction="column">

              <Grid item xs={12} id="user_name-field">
                <TextField label="Full Name" name="user_name" size="small" variant="outlined" className={classes.textfields} required />
              </Grid>
              <Grid item xs={12} id="user_email-field">
                <TextField label="Email" name="user_email" size="small" variant="outlined" className={classes.textfields} required />
              </Grid>

              <Grid item xs={12} id="subject-field">
                <TextField label="Subject" name="subject" size="small" variant="outlined" className={classes.textfields} />
              </Grid>
              <Grid item xs={12} id="message-field">
                <TextField label="Message" name="message" size="medium" variant="outlined" multiline rows={5} rowsMax={10} className={classes.textfields} required />
              </Grid>

              <Grid item xs={12} id="submit-field">
                <Fab style={{backgroundColor: "#A71212"}} variant="extended" type="submit">
                  <Send />
                </Fab>
              </Grid>

            </Grid>
          </form>
        </CardContent>
      </Card>

      <Slide direction={state.open ? 'right' : 'left'} in={state.open} mountOnEnter unmountOnExit className="sentEvent">
        <Paper elevation={24}>
          <img src={state.resIco ? mail_ok : mail_ko} alt="response_icon" id="response_icon" />
          {state.resIco ? '' : <p>Unexpected Error, Try again later!</p>}
        </Paper>
      </Slide>

      <Particles width="99vw" params={ParticlesConfigBG} id="contact-particlesBG" />
    </div>
  );
}

export default Contact;
