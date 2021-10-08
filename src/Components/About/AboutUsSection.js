import React from "react";
import { Link } from 'react-router-dom';

function AboutUsSection() {
    return (
        <div className="about-us-wrapper">
            <div className=" grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-6 items-center">
                <div className="about-us-img">
                    <img src="/images/about-us-img.png" alt="" title="" />
                </div>
                <div className="about-us-content">
                    <h2 className="font-72 question-title-color mb-10 hepta-semibold leading-none">
                        About Us.
                    </h2>
                    <p className="font-20 mont-font mont-regular text-gray-dim mb-10">
                        We are a comprehensive women’s health platform offering
                        digital care and telemedicine services to patients,
                        together with their personal doctor—anywhere, anytime.
                    </p>
                    <Link to="/">
                    <button
                        type="submit"
                        className="btn-login calibre-regular font-16 uppercase primary-bg-color text-white mr-3 tracking-widest"
                    >
                        Get Started
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default AboutUsSection;
