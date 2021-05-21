import Particles from 'react-particles-js';
import ParticlesConfigBG from '../../assets/scripts/configParticlesBG';
import { Grid } from '@material-ui/core';

import portrait from '../../assets/images/portfolio_cartoon.jpg';
import htmlIco from '../../assets/images/html_ico.svg';
import cssIco from '../../assets/images/css_ico.svg';
import jsIco from '../../assets/images/js_ico.svg';
import phpIco from '../../assets/images/php_ico.svg';
import pythonIco from '../../assets/images/python_ico.svg';
import reactIco from '../../assets/images/react_ico.svg';
import mysqlIco from '../../assets/images/mysql_ico.svg';
import sqlServerIco from '../../assets/images/sqlServer_ico.svg';
import mongodbIco from '../../assets/images/mongodb_ico.svg';
import './about.css';

function about() {
  return (
    <div>
      <Grid container justify="center" className="about-container">
        <Grid item xs={12} sm={4} md={5} id="portrait-container">
          <img src={portrait} alt="portrait" id="portrait"/>
        </Grid>
        <Grid item xs={12} sm={8} md={7} id="text-container">
          <p>I am self-learning Full Stack Developement environment.</p>
          <p>Doing incredible projects that exploit my creativity.</p>
          <br></br>
        </Grid>
        <Grid item xs={12} id="icons-container">
          <p>My professional skillset:</p>
          <div className="vanish-icons">
            <Grid container justify="center">
              <Grid item xs={4}>
                  <img src={htmlIco} alt="html_ico" className="icons" />
              </Grid>
              <Grid item xs={4}>
                  <img src={cssIco} alt="css_ico" className="icons" />
              </Grid>
              <Grid item xs={4}>
                  <img src={jsIco} alt="js_ico" className="icons" />
              </Grid>
              <Grid item xs={4}>
                  <img src={phpIco} alt="php_ico" className="icons" />
              </Grid>
              <Grid item xs={4}>
                  <img src={pythonIco} alt="python_ico" className="icons" />
              </Grid>
              <Grid item xs={4}>
                  <img src={reactIco} alt="react_ico" className="icons" />
              </Grid>
              <Grid item xs={4}>
                  <img src={mysqlIco} alt="mysql_ico" className="icons" />
              </Grid>
              <Grid item xs={4}>
                  <img src={sqlServerIco} alt="sqlServer_ico" className="icons" />
              </Grid>
              <Grid item xs={4}>
                  <img src={mongodbIco} alt="mongodb_ico" className="icons" />
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
      <Particles width="99vw" params={ParticlesConfigBG} id="about-particlesBG"/>
    </div>
  )
}

export default about;
