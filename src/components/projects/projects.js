import './projects.css';
import { Grid } from '@material-ui/core';
import Typewriter from 'typewriter-effect';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useState, useRef, useEffect } from 'react';
import { SliderControl, RenderSlides } from './slides';

import Particles from 'react-particles-js';
import ParticlesConfigBG from '../../assets/scripts/configParticlesBG';


function Projects() {
  // SLIDER HOOKS
  const [pause, setPause] = useState(false);
  const timer = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalDots, setTotalDots] = useState(1);
  const [sliderRef, slider] = useKeenSlider({
    slidesPerView: 1,
    mode: "free-snap",
    dragSpeed: 0.5,
    spacing: 15,

    loop: true,
    duration: 3000,
    dragStart: () => {
      setPause(true);
    },
    dragEnd: () => {
      setPause(false);
    },

    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },

  });

  // STOP SLIDING ON MOUSE
  useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true);
    });
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false);
    });
  }, [sliderRef]);

  // AUTOMATIC SLIDING
  useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next();
      }
    }, 5000);
    return () => {
      clearInterval(timer.current);
    }
  }, [pause, slider]);

  // RESET NAV DOTS ON CHANGE
  useEffect(() => {
    if (slider) {
      setTotalDots(slider.details().size);
    }
  }, [slider]);

  // RESET SLIDER ON CHANGE
  function reloadSlider() {
    process.nextTick(() => {
      slider.resize();
      setTotalDots(slider.details().size);
    });
  }
  /*-------------------------------------------------------------*/

  return (
    <div className="projects-container">
      <Grid container>
        <Grid item xs={12} id="tw-projects">
          <Typewriter
            options={{cursor:"_", delay:100}}
            onInit={(typewriter) => {
              typewriter.typeString("Check out some of my projects!").start();
            }}
          />
        </Grid>

        <Grid item xs={1}>
          <div onClick={reloadSlider} >
            <SliderControl />
          </div>
        </Grid>

        <Grid item xs={10} align="center">
          <div ref={sliderRef} className="keen-slider slider-container">
            <RenderSlides />
          </div>
        </Grid>

        <Grid item xs={1} />

        <Grid item xs={12}>
          {slider && (
            <div className="dots">
              {[...Array(totalDots).keys()].map((idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      slider.moveToSlideRelative(idx)
                    }}
                    className={"dot" + (currentSlide === idx ? " active" : "")}
                  />
                )
              })}
            </div>
          )}
        </Grid>
      </Grid>

      <Particles width="99vw" params={ParticlesConfigBG} id="contact-particlesBG" />  
    </div>
  );
}

export default Projects;