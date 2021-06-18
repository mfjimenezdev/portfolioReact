import React, { useState, useRef, useEffect } from 'react';
import './about.css';
import { Grid, Paper } from '@material-ui/core';
import {
  Timeline, TimelineItem, TimelineContent, TimelineOppositeContent, TimelineSeparator,
  TimelineDot, TimelineConnector,
} from '@material-ui/lab';

import Particles from 'react-particles-js';
import ParticlesConfigBG from '../../assets/scripts/configParticlesBG';

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

import ExperienceOpenDialog from './experience-dialogs';
import mNostrumIco from '../../assets/images/about/experience_container/mNostrum_icon.png';
import mREsteoIco from '../../assets/images/about/experience_container/mREsteo_icon.png';
import appInfIco from '../../assets/images/about/experience_container/appInf_icon.png';
import gMonsalvezIco from '../../assets/images/about/experience_container/gMonsalvez_icon.png';

function About() {
  // OWN CUSTOM DIALOG STUFF
  const [open, setOpen] = useState(false);
  const [exp, setExp] = useState(null);
  const dialog = useRef();

  function openDialog(experience) {
    setExp(experience);
    setOpen(true);
  }

  function handleClick(e) {
    if (dialog.current.contains(e.target)) {
      return;
    }

    setOpen(false);
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);
  // --------------------------------------------

  return (
    <div>
      <Grid container justify="center" className="about-container">

        {/* PORTRAIT */}
        <Grid item xs={12} sm={4} md={5} id="portrait-container">
          <img src={portrait} alt="portrait" id="portrait" />
        </Grid>
        <Grid item xs={12} sm={8} md={7} id="text-container">
          <p>I am self-learning Full Stack Developement environment.</p>
          <p>Doing incredible projects that exploit my creativity.</p>
          <br />
        </Grid>
        {/*-------------------------------------------------------------------*/}

        {/* SKILLSET */}
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
        {/*-------------------------------------------------------------------*/}

        {/* EXPERIENCE */}
        <Grid item xs={12} id="experience-container">
          <p>Experience:</p>
          <Grid container justify="center">
            <Grid item sm={3} />

            <Grid item xs={6} sm={3}>
              <Timeline>

                <TimelineItem className="experience-itemsA">
                  <TimelineOppositeContent>
                    2017-2019
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot>
                      <input type="image" src={mNostrumIco} alt="mareNostrum_icon" className="dotIcons" onClick={() => openDialog('mNostrum')} />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                </TimelineItem>

                <TimelineItem className="experience-itemsA">
                  <TimelineOppositeContent>
                    2019-2021
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot>
                      <input type="image" src={mREsteoIco} alt="miguelRomeroEsteo_icon" className="dotIcons" onClick={() => openDialog('mREsteo')} />
                    </TimelineDot>
                  </TimelineSeparator>
                </TimelineItem>
              </Timeline>
            </Grid>

            <Grid item xs={6} sm={3}>
              <Timeline>

                <TimelineItem className="experience-itemsB">
                  <TimelineSeparator>
                    <TimelineDot>
                      <input type="image" src={appInfIco} alt="appInformatica_icon" className="dotIcons" onClick={() => openDialog('appInf')} />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    4 Months
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem className="experience-itemsB">
                  <TimelineSeparator>
                    <TimelineDot>
                      <input type="image" src={gMonsalvezIco} alt="grupoMonsalvez_icon" className="dotIcons" onClick={() => openDialog('gMonsalvez')} />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    3 Months
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem className="experience-itemsB">
                  <TimelineSeparator style={{ color: '#A71212' }}>
                    ···
                  </TimelineSeparator>
                  <TimelineContent />
                </TimelineItem>
              </Timeline>
            </Grid>

            <Grid item sm={3} />
          </Grid>

          <Paper ref={dialog} elevation={3} className={`dialog ${open ? 'dialogOpen' : 'dialogClose'}`}>
            <div style={open ? { height: '100%', transition: 'opacity 1.3s ease-in', opacity: 1 } : { height: '0px', opacity: 0, overflow: 'hidden' }}>
              <ExperienceOpenDialog experience={exp} />
            </div>
          </Paper>
        </Grid>
        {/*-------------------------------------------------------------------*/}

      </Grid>

      <Particles width="99vw" params={ParticlesConfigBG} id="about-particlesBG" />
    </div>
  );
}

export default About;
