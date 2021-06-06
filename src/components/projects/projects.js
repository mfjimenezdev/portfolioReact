import './projects.css';
import { Grid, Checkbox } from '@material-ui/core';
import Typewriter from 'typewriter-effect';
import mail_ok from '../../assets/images/contact/mail_ok.svg';
import mail_ko from '../../assets/images/contact/mail_ko.svg';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useState, useRef, useEffect } from 'react';

import Portfolio from './slides/portfolio';

import Particles from 'react-particles-js';
import ParticlesConfigBG from '../../assets/scripts/configParticlesBG';

function Projects() {
  const [pause, setPause] = useState(false);
  const timer = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    slidesPerView: 1,
    mode: "free-snap",
    dragSpeed: 0.3,
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

  useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true);
    });
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false);
    });
  }, [sliderRef]);

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

  return (
    <div className="projects-container">
      <Grid container justify="flex-end">

        <Grid item xs={12}>
          <Typewriter
            options={{cursor:"_", delay:100}}
            onInit={(typewriter) => {
              typewriter.typeString("Check out some of my projects!").start();
            }}
          />
          <br/><br/>
        </Grid>

        <Grid item xs={1}>
          <Checkbox icon={<img src={mail_ko} alt="icon1" className="checkIcon" />}  checkedIcon={<img src={mail_ok} alt="icon" className="checkIcon" />} /><br/>
          <Checkbox icon={<img src={mail_ko} alt="icon1" className="checkIcon" />}  checkedIcon={<img src={mail_ok} alt="icon" className="checkIcon" />} />
        </Grid>
        <Grid item xs={10} align="center">
          <div ref={sliderRef} className="keen-slider slider-container">

            <Portfolio />
            <Portfolio />
            <Portfolio />
            <Portfolio />
            <Portfolio />
            <Portfolio />
            <Portfolio />
            <Portfolio />
            <Portfolio />
            <Portfolio />
            <Portfolio />
            <Portfolio />

          </div>
        </Grid>
        <Grid item xs={1} />

        <Grid item xs={12}>
          {slider && (
            <div className="dots">
              {[...Array(slider.details().size).keys()].map((idx) => {
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
