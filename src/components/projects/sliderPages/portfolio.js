import './slides.css';
import { Paper, Grid } from '@material-ui/core';
import GitHubForkRibbon from 'react-github-fork-ribbon';

import portfolio_ico from '../../../assets/images/project/portfolio_ico.svg';

// ICON SHOW FEATURES
let times = 0;
function showFeatures() {
  const featuresContainer = document.getElementById('portfolioFeatures');
  featuresContainer.style.visibility = 'visible';

  const icon = document.getElementById('portfolio_icon');
  icon.style.animation = "none";

  times++;
  if (times === 5) {
    icon.style.cursor = "default";
    alert("😃Stop looking, you are in!😃");
  }
}

function Portfolio() {
  return (
    <Paper className="keen-slider__slide slider">
      <p id="portfolio_text">MY PORTFOLIO TEMPLATE</p>
      <img src={portfolio_ico} alt="portfolio_icon" id="portfolio_icon" onClick={showFeatures.bind()} />

      <Grid container align="left">
        <Grid item xs={7} sm={8}></Grid>
        <Grid item xs={5} sm={4}>
          <div id="portfolioFeatures">
            <p>- Made with React</p>
            <p>- Responsive</p>
            <p>- Open Source</p>
          </div>
        </Grid>
      </Grid>

      <GitHubForkRibbon
        href="https://github.com/mfjimenezdev/portfolioReact"
        target="_blank"
        position="right"
        className="ghRibbon"
      >
        Fork me on GitHub
      </GitHubForkRibbon>
    </Paper>
  );
}

export default Portfolio;
