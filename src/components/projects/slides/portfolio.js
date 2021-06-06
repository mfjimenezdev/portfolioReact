import { Paper } from '@material-ui/core';

import portfolio_ico from '../../../assets/images/project/portfolio_ico.svg';


function Portfolio() {
  return (
    <Paper elevation={-15} className="keen-slider__slide slider">
      <h1>Personal Portfolio Template</h1>
      <img src={portfolio_ico} alt="slide_icon" />
    </Paper>
  );
}

export default Portfolio;
