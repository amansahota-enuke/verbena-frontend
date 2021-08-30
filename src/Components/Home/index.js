import React from "react";
import { BoxedWidthContainer, Consultation, Blog } from "..";
import AboutUs from "./AboutUs";
import Feedback from "./Feedback";
import Healthcare from "./Healthcare";
import Intro from "./Intro";
import Values from "./Values";

function Home() {
    return (
        <BoxedWidthContainer>
            <Intro />
            <Values />
            <Feedback />
            <Healthcare />
            <AboutUs />
            <Consultation />
            <Blog />
        </BoxedWidthContainer>
    );
}

export default Home;
