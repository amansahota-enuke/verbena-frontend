import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import selector from "../../redux/selector";
import { Loader, FullWidthContainer } from "../../Components";
import { CommonService } from "../../services";
import { ConfirmationActions } from "../../redux/slice/confirmation.slice";
import Slider from "react-slick";

function Index(props) {
  const dispatch = useDispatch();
  const providerId = useSelector(selector.confirmationProvider);
  const [loader, setLoader] = useState(true);
  const [providerDetail, setProviderDetail] = useState({});

  const getProviderDetail = async () => {
    try {
      const response = await CommonService.getProviderDetail(providerId);
      setProviderDetail(response.data.data);
      setLoader(false);
    } catch (error) {
      setLoader(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getProviderDetail();
  }, []);

  const closeModal = () => {
    dispatch(ConfirmationActions.closeConfirmation());
  };

  const parseName = (name) => {
    if (!name) return null;
    return name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
  };

  const setting = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <FullWidthContainer>
      {loader && <Loader />}
      <>
        <div className="page-title">
          <h2 className="hepta-bold text-center primary-text-color mb-10">
            Provider Profile
          </h2>
        </div>

        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6">
            <div className="bg-white p-8 rounded-lg mb-8">
              <div className="flex justify-between items-center xl:flex-nowrap lg:flex-nowrap md:flex-wrap sm:flex-wrap flex-wrap">
                <div>
                  <div className="flex xl:flex-nowrap lg:flex-nowrap md:flex-wrap sm:flex-wrap flex-wrap">
                    <div
                      className="profile-image border-2 rounded mr-5"
                      style={{
                        backgroundImage:
                          providerDetail.profile_logo &&
                          `url("${
                            process.env.REACT_APP_API_SERVER_URL +
                            providerDetail.profile_logo
                          }")`,
                      }}
                    ></div>
                    <div>
                      <h3 className="hepta-slab mb-3 text-2xl">
                        {providerDetail &&
                          `Dr. ${parseName(
                            providerDetail.first_name
                          )} ${parseName(providerDetail.last_name)}`}
                      </h3>
                      <h6 className="text-base uppercase mb-4 light-gray-color">
                        {providerDetail &&
                          providerDetail.provider_speciality_master &&
                          providerDetail.provider_speciality_master.name}
                      </h6>
                      <div className="provider-education flex items-center xl:flex-nowrap md:flex-wrap mb-4 whitespace-nowrap">
                        <div className="edu-icon mr-3">
                          <i className="fas fa-graduation-cap"></i>
                        </div>
                        <div className="light-gray-color text-base">
                          {providerDetail.hospital_affiliations &&
                            JSON.parse(
                              providerDetail.hospital_affiliations
                            ).map((hospital, index) => {
                              let test = index + 1;
                              if (
                                providerDetail.hospital_affiliations.length ===
                                test
                              ) {
                                return hospital.value;
                              } else {
                                return `${hospital.value}, `;
                              }
                            })}
                        </div>
                      </div>
                      <div className="provider-address flex xl:flex-nowrap md:flex-wrap mb-4">
                        <div className="address-icon mr-3">
                          <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="light-gray-color text-base">
                          {providerDetail &&
                            providerDetail.address &&
                            `${providerDetail.address.address_line1}, ${
                              providerDetail.address.address_line2 + ","
                            } ${providerDetail.address.city}, ${
                              providerDetail.address.state
                            } ${providerDetail.address.zipcode}`}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="scheduleded-appointment">
                    <a
                      type="button"
                      className="btn-schedule-app tracking-widest primary-bg-color calibre-regular font-14 text-uppercase text-white text-base px-4 py-4 rounded-full"
                      href={
                        process.env.REACT_APP_VERBENA_PATIENT +
                        "/home/appointment/schedule/" +
                        providerId
                      }
                    >
                      <i className="fas fa-calendar mr-3"></i>
                      SCHEDULE APPOINTMENT
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-6 sm:col-span-3">
            <div className="bg-white p-8 rounded-lg mb-8">
              <h3 className="hepta-bold text-2xl mb-6">About me</h3>
              <p className="about-content mid-dark-gray-color text-base mb-2">
                {providerDetail && providerDetail.bio && providerDetail.bio}
              </p>
            </div>
          </div>

          <div className="col-span-6 sm:col-span-3">
            <div className="bg-white p-8 rounded-lg mb-8">
              <div className="specialtites">
                <div className="flex xl:flex-nowrap lg:flex-nowrap md:flex-wrap sm:flex-wrap mb-4 border-b-2">
                  <div className="mr-4">
                    <img src="images/icon-1.png" alt="" title="" />
                  </div>
                  <div>
                    <h2 className="mb-2 text-lg leading-none">Speciality</h2>
                    <p className="mid-dark-gray-color mb-2 text-lg">
                      {providerDetail &&
                        providerDetail.provider_speciality_master &&
                        providerDetail.provider_speciality_master.name}
                    </p>
                  </div>
                </div>

                <div className="flex xl:flex-nowrap lg:flex-nowrap md:flex-wrap sm:flex-wrap mb-4 border-b-2">
                  <div className="mr-4">
                    <img src="images/icon-2.png" alt="" title="" />
                  </div>
                  <div>
                    <h2 className="mb-2 text-lg leading-none">
                      Hospital Affiliations
                    </h2>
                    <p className="mid-dark-gray-color mb-2 text-lg">
                      {providerDetail.hospital_affiliations &&
                        JSON.parse(providerDetail.hospital_affiliations).map(
                          (hospital, index) => (
                            <p
                              className="mid-dark-gray-color mb-2 text-lg"
                              key={index}
                            >
                              {hospital.value}
                            </p>
                          )
                        )}
                    </p>
                  </div>
                </div>

                <div className="flex xl:flex-nowrap lg:flex-nowrap md:flex-wrap sm:flex-wrap mb-4 border-b-2">
                  <div className="mr-4">
                    <img src="images/icon-3.png" alt="" title="" />
                  </div>
                  <div>
                    <h2 className="mb-2 text-lg leading-none">
                      Board Certifications
                    </h2>
                    <p className="mid-dark-gray-color mb-2 text-lg">
                      {providerDetail.board_certifications &&
                        JSON.parse(providerDetail.board_certifications).map(
                          (board, index) => (
                            <p
                              className="mid-dark-gray-color mb-2 text-lg"
                              key={index}
                            >
                              {board.value}
                            </p>
                          )
                        )}
                    </p>
                  </div>
                </div>

                <div className="flex xl:flex-nowrap lg:flex-nowrap md:flex-wrap sm:flex-wrap mb-4 border-b-2">
                  <div className="mr-4">
                    <img src="images/icon-4.png" alt="" title="" />
                  </div>
                  <div>
                    <h2 className="mb-2 text-lg leading-none">Languages</h2>
                    {providerDetail.languages_spoken &&
                      JSON.parse(providerDetail.languages_spoken).map(
                        (language, index) => (
                          <p
                            className="mid-dark-gray-color mb-2 text-lg"
                            key={index}
                          >
                            {language.value}
                          </p>
                        )
                      )}
                  </div>
                </div>

                <div className="flex xl:flex-nowrap lg:flex-nowrap md:flex-wrap sm:flex-wrap mb-4 border-b-2">
                  <div className="mr-4">
                    <img src="images/icon-5.png" alt="" title="" />
                  </div>
                </div>

                <div className="flex xl:flex-nowrap lg:flex-nowrap md:flex-wrap sm:flex-wrap mb-4 border-b-2">
                  <div className="mr-4">
                    <img src="images/icon-6.png" alt="" title="" />
                  </div>
                  <div>
                    <h2 className="mb-2 text-lg leading-none">
                      Consultation Fees
                    </h2>
                    <p className="mid-dark-gray-color mb-2 text-lg">
                      {providerDetail.consultation_fee}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
            <div className="p-8 rounded-lg mb-8">
              <h2 className="hepta-slab xl:text-4xl lg:text-4xl md:text-2xl sm:text-2xl text-2xl mb-10 text-center">
                Patient Recognitions and Testimonials
              </h2>

              <div className="slick-slider">
                <div className="">
                  <Slider {...setting} className="slick-wrapper">
                    {providerDetail.patient_testimonial &&
                      JSON.parse(providerDetail.patient_testimonial).map(
                        (testimonial, index) => (
                          <div>
                            <div className="author-profile text-center">
                              {[
                                ...Array(
                                  testimonial && testimonial.rating
                                    ? Number(testimonial.rating)
                                    : 0
                                ),
                              ].map((x, i) => (
                                <i className="fas fa-star mr-2"></i>
                              ))}
                            </div>
                            <p class="my-8 author-content hepta-slab text-4xl text-center relative">
                              <span className="">
                                <i class="fas fa-quote-left"></i>
                              </span>

                              {testimonial.value && testimonial.value}
                              <span className="">
                                <i class="fas fa-quote-right"></i>
                              </span>
                            </p>
                            <span className="caption-author text-center block">
                              {testimonial.patient_name &&
                                `-${testimonial.patient_name}`}
                            </span>
                          </div>
                        )
                      )}
                  </Slider>
                </div>
              </div>
              
            </div>
          </div>
        <div className="mt-4 text-right">
          <button
            type="button"
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            onClick={closeModal}
          >
            Got it, thanks!
          </button>
        </div>
      </>
    </FullWidthContainer>
  );
}

export default Index;
