import React from "react";

function Help() {
  return (
    <div className="health-care-explore">
      <span
        data-aos-duration="1000"
        data-aos="slide-left"
        className="xl:absolute lg:absolute md:relative sm:relative relative right-0 top-0"
      >
        <img src="/images/service-home-bg.png" alt="" title="" />
      </span>
      <div className="flex justify-start">
        <div
          data-aos-duration="1000"
          data-aos="slide-right"
          className="health-explore-content xl:mt-20 lg:mt-20 md:mt-10 sm:mt-10 mt-10"
        >
          <h3 className="font-72 hepta-semibold mb-10 question-title-color leading-none">
            How Can <br />
            We Help You?
          </h3>
          <p className="font-20 mont-font mont-regular text-gray-dim mb-10">
            We offer a range of services to best address your
            <br /> healthcare needs.
          </p>
          <a href={`${process.env.REACT_APP_VERBENA_PATIENT}`}>
            <button
              type="submit"
              className="btn-login calibre-regular font-normal font-18 uppercase primary-bg-color text-white mr-3 tracking-widest"
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
