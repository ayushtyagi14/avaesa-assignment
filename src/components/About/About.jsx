import React from "react";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  MoveOut,
  Sticky,
} from "react-scroll-motion";
import "./about.css";
import useReadingProgress from "../../hooks/useReadingProgress";

const About = () => {
  const completion = useReadingProgress();

  return (
    <div className="about">
      <ScrollContainer>
        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <h1>100%</h1>
            <div className="about-content">
              <h3> Organic </h3>
              <h3> Cold-pressed </h3>
              <h3> Raw </h3>
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -600))}>
            <h1>0%</h1>
            <div className="about-content">
              <h3>Additives</h3>
              <h3>Pasteurisation</h3>
              <h3>HPP</h3>
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <h2>IS THE WHITE SEDIMENT IN MY BOTTLE NORMAL? </h2>
            <p>
              Yes ! The white sediment is the gingerol - ginger's bioactive
              compound. You will find it in the Ultimate Detox, Dr. Green, Happy
              Gut and Shield Immunity.
              <br />
              <br />
              It is super good for you, so shake the bottle well{" "}
            </p>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
      <span style={{ transform: `translateX(${completion - 100}%)` }} />
    </div>
  );
};

export default About;
