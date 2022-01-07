import React from "react";

function Health() {
  return (
    <div className="woman-need-grid">
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-6">
        <div
          data-aos="slide-up"
          data-aos-duration="2000"
          className="bg-white relative overflow-hidden rounded-xl shadow-xl xl:pl-10 lg:pl-10 md:pl-5 sm:pl-5 pl-5 xl:pr-10 lg:pr-10 md:pr-5 sm:pr-5 pr-5 pt-28 pb-28"
        >
          <span className="absolute top-0 -right-2">
            <img src="/images/cloud-vector.png" title="" alt="" />
          </span>
          <a href={`${process.env.REACT_APP_VERBENA_PATIENT}/login`}>
            <h3 className="font-24 hepta-semibold question-title-color mb-2">
              Adolescent + Young Adult Health
            </h3>

            <p className="font-20 mont-font mont-regular text-gray-dim text-gray-dim">
              Birth Control, STI Testing, UTI Treatment <br /> Vaginal
              Infection, Menstrual Issues
            </p>
          </a>
        </div>
        <div
          data-aos="slide-up"
          data-aos-duration="2000"
          className="bg-white relative overflow-hidden rounded-xl shadow-xl xl:pl-10 lg:pl-10 md:pl-5 sm:pl-5 pl-5 xl:pr-10 lg:pr-10 md:pr-5 sm:pr-5 pr-5 pt-28 pb-28"
        >
          <span className="absolute top-0 -right-2">
            <img src="/images/cloud-vector.png" title="" alt="" />
          </span>
          <a href={`${process.env.REACT_APP_VERBENA_PATIENT}/login`}>
            <h3 className="font-24 hepta-semibold question-title-color mb-2">
              Reproductive Health
            </h3>
            <p className="font-20 mont-font mont-regular text-gray-dim text-gray-dim">
              Contraception, Unintended Pregnancy, Morning After Pill, Fertility
              Concerns, Preconception Counseling
            </p>
          </a>
        </div>
        <div
          data-aos="slide-up"
          data-aos-duration="2000"
          className="bg-white relative overflow-hidden rounded-xl shadow-xl xl:pl-10 lg:pl-10 md:pl-5 sm:pl-5 pl-5 xl:pr-10 lg:pr-10 md:pr-5 sm:pr-5 pr-5 pt-28 pb-28"
        >
          <span className="absolute top-0 -right-2">
            <img src="/images/cloud-vector.png" title="" alt="" />
          </span>
          <a href={`${process.env.REACT_APP_VERBENA_PATIENT}/login`}>
            <h3 className="font-24 hepta-semibold question-title-color mb-2">
              Obstetrics + Post-Partum Care
            </h3>
            <p className="font-20 mont-font mont-regular text-gray-dim text-gray-dim">
              Post-Delivery Check Up, Breast Feeding Concerns Post-Partum
              Contraception, Post Partum Mood Changes
            </p>
          </a>
        </div>
        <div
          data-aos="slide-up"
          data-aos-duration="2000"
          className="bg-white relative overflow-hidden rounded-xl shadow-xl xl:pl-10 lg:pl-10 md:pl-5 sm:pl-5 pl-5 xl:pr-10 lg:pr-10 md:pr-5 sm:pr-5 pr-5 pt-28 pb-28"
        >
          <span className="absolute top-0 -right-2">
            <img src="/images/cloud-vector.png" title="" alt="" />
          </span>
          <a href={`${process.env.REACT_APP_VERBENA_PATIENT}/login`}>
            <h3 className="font-24 hepta-semibold question-title-color mb-2">
              Sexual Health
            </h3>
            <p className="font-20 mont-font mont-regular text-gray-dim text-gray-dim">
              UTI Treatment, Vaginal Irritation, STI Concerns Libido, Painful
              Sex
            </p>
          </a>
        </div>
        <div
          data-aos="slide-up"
          data-aos-duration="2000"
          className="bg-white relative overflow-hidden rounded-xl shadow-xl xl:pl-10 lg:pl-10 md:pl-5 sm:pl-5 pl-5 xl:pr-10 lg:pr-10 md:pr-5 sm:pr-5 pr-5 pt-28 pb-28"
        >
          <span className="absolute top-0 -right-2">
            <img src="/images/cloud-vector.png" title="" alt="" />
          </span>
          <a href={`${process.env.REACT_APP_VERBENA_PATIENT}/login`}>
            <h3 className="font-24 hepta-semibold question-title-color mb-2">
              Peri + Menopausal Health
            </h3>
            <p className="font-20 mont-font mont-regular text-gray-dim text-gray-dim">
              Hot Flashes, Mood + Sleep Disruption, Sexual Dysfunction Hormone
              Concerns, Bone Health
            </p>
          </a>
        </div>
        <div
          data-aos="slide-up"
          data-aos-duration="2000"
          className="xl:pl-10 lg:pl-10 md:pl-5 sm:pl-5 pl-5 xl:pr-10 lg:pr-10 md:pr-5 sm:pr-5 pr-5 pt-28 pb-28"
        >
          <h3 className="font-24 hepta-semibold question-title-color mb-2">
            Is there something we didn’t mention that we can help you with?
          </h3>
          <a href="mailto:info@verbenacare.com">
            <button
              type="submit"
              className="btn-login calibre-regular font-18 font-normal uppercase primary-bg-color text-white mr-3 tracking-widest"
            >
              Reach Out
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Health;
