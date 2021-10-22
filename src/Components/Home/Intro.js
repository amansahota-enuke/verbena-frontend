import React from "react";
import { Link } from 'react-router-dom';
function Intro() {
    return (
        <div className="health-care-explore">
            <span  data-aos-duration="1000"data-aos="slide-left" className="xl:absolute lg:absolute md:relative sm:relative relative right-0 top-0"><img src="/images/explore-bg.png" alt="" title=""/></span>
            <div className="flex justify-start">
                <div data-aos-duration="1000" data-aos="slide-right" className="health-explore-content">
                    <h3 className="font-72 hepta-semibold question-title-color leading-none">Your Doctor.</h3>
                    <h3 className="font-72 hepta-semibold question-title-color leading-none">Your Care.</h3>
                    <h3 className="font-72 hepta-semibold question-title-color leading-none mb-10">Your Time.</h3>
                    <p className="mont-font mont-regular font-20 mb-10">
                        We are a comprehensive women’s health platform offering
                        digital care and telemedicine services to patients,
                        together with their personal doctor—anywhere, anytime.
                    </p>
                    <a href={`${process.env.REACT_APP_VERBENA_PATIENT}/login`}>
                    <button
                        type="submit"
                        className="btn-login calibre-regular font-16 uppercase primary-bg-color text-white mr-3 tracking-widest"
                    >
                        Explore
                    </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Intro;
