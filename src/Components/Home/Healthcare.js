import React from "react";

function Healthcare() {
    return (
        <div className="health-care-way relative mt-90">
            <span className="xl:absolute lg:absolute md:relative sm:relative relative left-0 top-0">
                <img src="/images/health-care-bg.png" alt="" title="" />
            </span>
            <div className="flex justify-end">
                <div className="health-care-content">
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
                        className="btn-login calibre-bold font-18 uppercase primary-bg-color text-white mr-3"
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Healthcare;
