import './about.css';
import Particles from 'react-particles-js';
import ParticlesConfigBG from '../../assets/scripts/configParticlesBG';
import { Grid } from '@material-ui/core';
import { Timeline, TimelineItem, TimelineOppositeContent, TimelineSeparator,
  TimelineDot, TimelineConnector, TimelineContent } from '@material-ui/lab';

import portrait from '../../assets/images/about/portfolio_cartoon.jpg';
import htmlIco from '../../assets/images/about/icons_container/html_ico.svg';
import cssIco from '../../assets/images/about/icons_container/css_ico.svg';
import jsIco from '../../assets/images/about/icons_container/js_ico.svg';
import phpIco from '../../assets/images/about/icons_container/php_ico.svg';
import pythonIco from '../../assets/images/about/icons_container/python_ico.svg';
import reactIco from '../../assets/images/about/icons_container/react_ico.svg';
import mysqlIco from '../../assets/images/about/icons_container/mysql_ico.svg';
import sqlServerIco from '../../assets/images/about/icons_container/sqlServer_ico.svg';
import mongodbIco from '../../assets/images/about/icons_container/mongodb_ico.svg';

import mNostrumIco from '../../assets/images/about/career_container/mNostrum_icon.png';
import mREsteoIco from '../../assets/images/about/career_container/mREsteo_icon.png';
import appInfIco from '../../assets/images/about/career_container/appInf_icon.png';
import gMonsalvezIco from '../../assets/images/about/career_container/gMonsalvez_icon.png';

function About() {
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

        <Grid item xs={12} id="career-container">
          <p>Experience:</p>
          <Grid container justify="center">
            <Grid item xs={0} sm={3} />

            <Grid item xs={6} sm={3}>
              <Timeline>

                <TimelineItem className="experience-items">
                  <TimelineOppositeContent>
                    2017-2019
                  </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot>
                        <img src={mNostrumIco} alt="mareNostrum_icon" className="dotIcons" />
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                  <TimelineContent>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem className="experience-items">
                  <TimelineOppositeContent>
                    2019-2021
                  </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot>
                        <img src={mREsteoIco} alt="miguelRomeroEsteo_icon" className="dotIcons" />
                      </TimelineDot>
                    </TimelineSeparator>
                  <TimelineContent>
                  </TimelineContent>
                </TimelineItem>

              </Timeline>
            </Grid>

            <Grid item xs={6} sm={3}>
              <Timeline>

              <TimelineItem className="experience-items">
                  <TimelineOppositeContent>
                    4 Months
                  </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot>
                        <img src={appInfIco} alt="appInformatica_icon" className="dotIcons" />
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                  <TimelineContent>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem className="experience-items">
                  <TimelineOppositeContent>
                    3 Months
                  </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot>
                        <img src={gMonsalvezIco} alt="grupoMonsalvez_icon" className="dotIcons" />
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                  <TimelineContent>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem className="experience-items">
                  <TimelineOppositeContent>
                  </TimelineOppositeContent>
                    <TimelineSeparator style={{color: '#A71212'}}>
                      ···
                    </TimelineSeparator>
                  <TimelineContent />
                </TimelineItem>
              </Timeline>
            </Grid>

            <Grid item xs={0} sm={3} />
          </Grid>
        </Grid>

      </Grid>

      <Particles width="99vw" params={ParticlesConfigBG} id="about-particlesBG"/>
    </div>
  )
}

export default About;
