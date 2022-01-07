import React from "react";
import { BoxedWidthContainer, Consultation, Blog } from "..";
import AboutUs from "./AboutUs";
import Feedback from "./Feedback";
import Healthcare from "./Healthcare";
import Intro from "./Intro";
import Values from "./Values";

function Home() {
  return (
    <>
      <section
        data-aos="fade-right"
        className="bg-white pt-40 pb-80 relative z-20"
      >
        <BoxedWidthContainer>
          <Intro />
        </BoxedWidthContainer>
      </section>
      <section className="light-green-bg-color pt-40 pb-40 custom-overflow curve-right relative z-20">
        <BoxedWidthContainer>
          <Values />
          <Feedback />
          <Healthcare />
        </BoxedWidthContainer>
      </section>
      <section className="bg-white pt-40 xl:pb-80 lg:pb-80 mb:pb-40 sm:pb-40 pb-40 overflow-hidden">
        <BoxedWidthContainer>
          <AboutUs />
        </BoxedWidthContainer>
      </section>
      <section className="dark-green-bg-color pt-40 pb-40 relative custom-overflow z-20 curve-left curve-right curve-left-center curve-right-bottom">
        <BoxedWidthContainer>
          <Consultation />
          <Blog />
        </BoxedWidthContainer>
      </section>
    </>
  );
}

export default Home;
