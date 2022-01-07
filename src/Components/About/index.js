import React from "react";
import { BoxedWidthContainer, Consultation, Blog } from "..";
import AboutUsSection from "./AboutUsSection";
import Founders from "./Founders";
import Story from "./Story";
import Stand from "./Stand";

function About() {
  return (
    <>
      <section className="bg-white pt-40 pb-40">
        <BoxedWidthContainer>
          <AboutUsSection />
        </BoxedWidthContainer>
      </section>
      <section className="light-green-bg-color xl:pt-40 lg:pt-40 md:pt-20 sm:pt-20 pt-20 xl:pb-40 lg:pb-40 md:pb-20 sm:pb-20 pb-20 overflow-hidden">
        <BoxedWidthContainer>
          <Founders />
          <Story />
        </BoxedWidthContainer>
      </section>
      <section className="bg-white pt-20 pb-60">
        <BoxedWidthContainer>
          <Stand />
        </BoxedWidthContainer>
      </section>
      <section className="dark-green-bg-color pt-40 pb-40">
        <BoxedWidthContainer>
          <Consultation />
          <Blog />
        </BoxedWidthContainer>
      </section>
    </>
  );
}

export default About;
