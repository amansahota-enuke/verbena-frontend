import React from "react";
import { Link } from 'react-router-dom';
function Healthcare() {
    return (
        <div className="health-care-way mt-90">
            
            <div className="flex justify-end xl:flex-nowrap lg:flex-nowrap md:flex-wrap sm:flex-wrap flex-wrap">
                <div className="health-care-content xl:mb-0 lg:mb-0 md:mb-10 sm:mb-10 mb-10">
                    <h3 className="font-42 hepta-semibold mb-10 question-title-color leading-none">
                        Healthcare <br />
                        Her Way.
                    </h3>
                    <p className="font-20 mont-font mont-regular text-gray-dim mb-10">
                        Created with her care in mind, Verbena celebrates the
                        unique health needs throughout her lifetime—from
                        menstruation to menopause (and everything in between).
                        We provide a secure and direct line of communication to
                        your personal doctor/provider anytime, anywhere.
                    </p>
                    <a href={`${process.env.REACT_APP_VERBENA_PATIENT}`}>
                    <button
                        type="submit"
                        className="btn-login calibre-regular font-18 font-normal uppercase primary-bg-color text-white mr-3 tracking-widest"
                    >
                        Get Started
                    </button>
                    </a>
                </div>
                <div className="health-care-left-img xl:absolute lg:absolute md:relative sm:relative relative left-0 top-50">
                    <img src="/images/health-care-bg.png" alt="" title="" />
                </div>
            </div>
        </div>
    );
}

export default Healthcare;
