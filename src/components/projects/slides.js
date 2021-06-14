import './projects.css';
import {RadioGroup, Radio, FormControlLabel } from '@material-ui/core';
import { useState } from 'react';
import { useBetween } from 'use-between';

import catAllN from '../../assets/images/project/cat_allN.svg';
import catAllY from '../../assets/images/project/cat_allY.svg';
import catReactN from '../../assets/images/project/cat_reactN.svg';
import catReactY from '../../assets/images/project/cat_reactY.svg';
import catLinuxN from '../../assets/images/project/cat_linuxN.svg';
import catLinuxY from '../../assets/images/project/cat_linuxY.svg';

import Portfolio from './sliderPages/portfolio';

// SHARED HOOKS FUNCTION
function useCategory() {
  const [category, setCategory] = useState('all');
  return { category, setCategory };
}
const useSharedCategory = () => useBetween(useCategory); // SHARING HOOKS CALL

// SLIDER CATEGORY CONTROLS
function SliderControl() {
  const { setCategory } = useSharedCategory();

  const handleChange = (event) => {
    setCategory(event.target.value);
  }

  return (
    <RadioGroup defaultValue="all" name="slider-control" onChange={handleChange}>
      <FormControlLabel value="all" control={<Radio icon={<img src={catAllN} alt="allCatOFF" className="checkIcon" />} checkedIcon={<img src={catAllY} alt="allCatON" className="checkIcon" />} />} label="ALL" />
      <FormControlLabel value="react" control={<Radio icon={<img src={catReactN} alt="reactCatOFF" className="checkIcon" />} checkedIcon={<img src={catReactY} alt="reactCatON" className="checkIcon" />} />} label="REACT" />
      <FormControlLabel value="linux" control={<Radio icon={<img src={catLinuxN} alt="linuxCatOFF" className="checkIcon" />} checkedIcon={<img src={catLinuxY} alt="linuxCatON" className="checkIcon" />} />} label="LINUX" />
    </RadioGroup>
  );
}

// RENDER CLASSIFIED COMPONENTS 
function RenderSlides() {
  const { category } = useSharedCategory();

  return (
    <>
      { category === 'react' ?
        <>
          <><Portfolio /></>
        </>
      : category === 'linux' ?
        <>
        </>
      :
        <>
          <><Portfolio /></>
          <><Portfolio /></>
        </>
      }
    </>
  );
}

export { SliderControl, RenderSlides};