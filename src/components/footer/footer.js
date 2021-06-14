import { Grid } from '@material-ui/core';
import "./footer.css";

import ghubIco from '../../assets/images/barsIcons/ghub_ico.svg';
import lkdInIco from '../../assets/images/barsIcons/lkdIn_ico.svg';

function footer() {
  return(
    <div className="footer-container">
      <footer className="footer-item">
        <hr className="footer-separator"></hr>
        <Grid container direction="row">
          <Grid item xs={12} sm={3}></Grid>
          <Grid item xs={12} sm={6}>
            © {new Date().getFullYear()} Moisés Fernández
          </Grid>
          <Grid item xs={12} sm={3} id="footer-icons">
            <a href="https://www.linkedin.com/in/mfjimenezdev/" target="_blank" rel="noopener noreferrer"><img src={lkdInIco} alt="linkedInIcon" className="footerImg" /></a>
            <a href="https://github.com/mfjimenezdev" target="_blank" rel="noopener noreferrer"><img src={ghubIco} alt="gitHubIcon" className="footerImg" /></a>
          </Grid>
        </Grid>
      </footer>
    </div>
  );
}

export default footer;
