import React from "react";

function Healthcare() {
    return (
        <div className="health-care-way mt-90">
            
            <div className="flex justify-end xl:flex-nowrap lg:flex-nowrap md:flex-wrap sm:flex-wrap flex-wrap">
                <div className="health-care-content xl:mb-0 lg:mb-0 md:mb-10 sm:mb-10 mb-10">
                    <h3 className="font-72 hepta-semibold mb-5 question-title-color leading-tight">
                        Healthcare <br />
                        Her Way.
                    </h3>
                    <p className="mont-font mont-regular font-20 mb-5">
                        Created with her care in mind, Verbena celebrates the
                        unique health needs throughout her lifetime—from
                        menstruation to menopause (and everything in between).
                        We provide a secure and direct line of communication to
                        your personal doctor/provider anytime, anywhere.
                    </p>
                    <button
                        type="submit"
                        className="btn-login calibre-regular font-16 uppercase primary-bg-color text-white mr-3"
                    >
                        Get Started
                    </button>
                </div>
                <div className="health-care-left-img xl:absolute lg:absolute md:relative sm:relative relative left-0 top-55">
                    <img src="/images/health-care-bg.png" alt="" title="" />
                </div>
            </div>
        </div>
    );
}

export default Healthcare;
