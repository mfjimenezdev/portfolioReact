import { Grid } from '@material-ui/core';
import ReactDOM from 'react-dom';
import Particles from 'react-particles-js';
import ParticlesConfigBG from '../../assets/scripts/configParticlesBG';
import Typewriter from 'typewriter-effect';
import IntroSkip from './intro-skip';
import './intro.css';

function intro() {
  document.body.className = 'intro-body';
  return (
    <div>
      <Particles width="100vw" height="100vh" params={ParticlesConfigBG}/>
      <Grid container justify='center' className="intro-container">
        <Grid item xs={2} sm={4} md={5} className='shell'>
          <span>{"> "}</span>
        </Grid>
        <Grid item xs={10} sm={8} md={7} className="tw-container">
            <Typewriter 
                options={{cursor:"_", delay:75}}
                onInit={(typewriter) => {
                  typewriter.typeString("Hey! I'm Moises")
                  .pauseFor(800)
                  .typeString(", <br> root of this site!<br><br>")
                  .pauseFor(500)
                  .typeString("Do you want to know <br> my career goals?")
                  .callFunction(() => ReactDOM.render(<IntroSkip />, document.getElementById('lazyLoadEnterKey')))
                  .start();
                }}
            />
        </Grid>
        <Grid item xs={12} className="keyboard-container">
          <div id="lazyLoadEnterKey" />
        </Grid>
      </Grid>
    </div>
  );
}

export default intro;
