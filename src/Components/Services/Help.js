import React from "react";
import { Link } from 'react-router-dom';

function Help() {
    return (
        <div className="health-care-explore">
            <span className="xl:absolute lg:absolute md:relative sm:relative relative right-0 top-0"><img src="/images/service-home-bg.png" alt="" title=""/></span>
            <div className="flex justify-start">
                <div className="health-explore-content mt-20">
                    <h3 className="font-72 hepta-semibold mb-10 question-title-color leading-none">
                        How Can <br />
                        We Help You?
                    </h3>
                    <p className="mont-font mont-regular font-20 mb-10">
                        We offer a range of services to best address your
                        <br /> healthcare needs.
                    </p>
                    <a href={`${process.env.REACT_APP_VERBENA_PATIENT}/login`}>
                    <button
                        type="submit"
                        className="btn-login calibre-regular font-16 uppercase primary-bg-color text-white mr-3 tracking-widest"
                    >
                        Get Started
                    </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Help;
