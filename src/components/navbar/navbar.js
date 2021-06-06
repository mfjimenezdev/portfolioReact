import { Grid } from '@material-ui/core';
import './navbar.css';

import homeIco from '../../assets/images/barsIcons/home_ico.svg';
import aboutIco from '../../assets/images/barsIcons/about_ico.svg';
import projectsIco from '../../assets/images/barsIcons/projects_ico.svg';
import contactIco from '../../assets/images/barsIcons/contact_ico.svg';

function menuToggle() {
  var iconContainer = document.getElementById('menuDashIcons');
  iconContainer.classList.toggle("showed");
  iconContainer.classList.toggle("hidden");
}

function navbar() {
  return (
    <div className="navbar-container">

      <div id="menuToggleIcon">
        <input type="checkbox" id="menuToggled" onClick={menuToggle.bind()}/>
        <span id="span1"></span>
        <span id="span2"></span>
      </div>

      <Grid container id="menuDashIcons" className="hidden">
        <Grid item lg={12} id="icon1">
          <a href="/home"><img src={homeIco} alt="homeIcon" className="navbarImg" /></a>
        </Grid>
        <Grid item lg={12} id="icon2">
          <a href="/about"><img src={aboutIco} alt="aboutIcon" className="navbarImg" /></a>
        </Grid>
        <Grid item lg={12} id="icon3">
          <a href="/projects"><img src={projectsIco} alt="projectsIcon" className="navbarImg" /></a>
        </Grid>
        <Grid item lg={12} id="icon4">
          <a href="/contact"><img src={contactIco} alt="contactIcon" className="navbarImg" /></a>
        </Grid>
      </Grid>

    </div>
  )
}

export default navbar;
