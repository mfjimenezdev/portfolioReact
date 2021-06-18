import React from 'react';
import { Grid } from '@material-ui/core';
import './about.css';

import mNostrumIco from '../../assets/images/about/experience_container/mNostrum_icon.png';
import mREsteoIco from '../../assets/images/about/experience_container/mREsteo_icon.png';
import appInfIco from '../../assets/images/about/experience_container/appInf_icon.png';
import gMonsalvezIco from '../../assets/images/about/experience_container/gMonsalvez_icon.png';

function OpenDialog(experience) {
  switch (experience.experience) {
    case 'mNostrum':
      return (
        <Grid container className="experiences-container">
          <Grid item xs={4} className="experiences-logos">
            <img src={mNostrumIco} alt="mareNostrum_logo" className="logos" />
          </Grid>

          <Grid item xs={8}>
            <br />
            <h3>IES MARE NOSTRUM</h3>
            {/* <br /> */}
            <p>VET - Technician in Telecommunications Installations</p>
          </Grid>
        </Grid>
      );

    case 'mREsteo':
      return (
        <Grid container className="experiences-container">
          <Grid item xs={5} className="experiences-logos">
            <img src={mREsteoIco} alt="miguelRomeroEsteo_logo" className="logos" />
          </Grid>

          <Grid item xs={7}>
            <br />
            <h3>IES MIGUEL ROMERO ESTEO</h3>
            {/* <br /> */}
            <p>CertHE - Higher Technician in Computer Network Systems Management</p>
          </Grid>
        </Grid>
      );

    case 'appInf':
      return (
        <Grid container className="experiences-container">
          <Grid item xs={5} className="experiences-logos">
            <img src={appInfIco} alt="appInformatica_logo" className="logos" />
          </Grid>

          <Grid item xs={7}>
            <br />
            <h3> APP INFORMATICA LAS PIRAMIDES</h3>
            {/* <br /> */}
            <p>IT Technician</p>
            <p>Devices repair & electrical and network installations</p>
          </Grid>
        </Grid>
      );

    case 'gMonsalvez':
      return (
        <Grid container className="experiences-container">
          <Grid item xs={5} className="experiences-logos">
            <img src={gMonsalvezIco} alt="grupoMonsalvez_logo" className="logos" />
          </Grid>

          <Grid item xs={7}>
            <br />
            <h3> GRUPO MONSALVEZ</h3>
            {/* <br /> */}
            <p>IT Technician & Full Stack Developer</p>
            <p>Developed many webpages and Computer management</p>
          </Grid>
        </Grid>
      );

    default:
      return (
        <>UNEXPECTED EXPERIENCE!</>
      );
  }
}

export default OpenDialog;
