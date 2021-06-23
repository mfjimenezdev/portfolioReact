import React from 'react';
import './slides.css';
import { Paper } from '@material-ui/core';
import workProgress from '../../../assets/images/project/workProgress.svg';

function RemoteResource() {
  return (
    <Paper className="keen-slider__slide slider">
      <img src={workProgress} alt="Work in progress" style={{ width: '100%' }} />
    </Paper>
  );
}

export default RemoteResource;
