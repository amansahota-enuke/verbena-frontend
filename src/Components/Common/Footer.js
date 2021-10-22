import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <section className="blog-footer">
                <div className="container mx-auto xl:px-32 lg:px-32 md:px-10 sm:px-10 px-10 py-10">
                    <div className="grid grid-flow-row xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 mb-12">
                        <div className="footer-detail-logo xl:mb-0 lg:mb-0 md-mb-4 sm:mb-4 mb-8">
                            <div className="verbena-footer-logo mb-4">
                                <Link to="/home">
                                    <img
                                        src="/images/blog-footer-logo.png"
                                        alt=""
                                        title=""
                                    />
                                </Link>
                            </div>
                            <div className="blog-footer-social-links">
                                <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-6 sm:grid-cols-6 grid-cols-4 gap-2">
                                    <a href="https://www.facebook.com/verbenacare/" target="_blank" className="social block cursor-pointer">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="https://www.instagram.com/verbena_care/" target="_blank" className="social block cursor-pointer">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/company/herhealthnow/" target="_blank" className="social block cursor-pointer">
                                    <i class="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="blog-footer-heading xl:mb-0 lg:mb-0 md-mb-4 sm:mb-4 mb-8">
                            <h5 className="hepta-semibold uppercase text-white mb-4">
                                Patient Services
                            </h5>
                            <div className="blog-footer-links">
                                <ul className="blog-footer-list">
                                    <li>
                                        <a href={`${process.env.REACT_APP_VERBENA_PATIENT}/home/appointment`}>
                                            <a className="mont-regular text-white font-18 mont-font cursor-pointer">
                                                Make Appointment
                                            </a>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={`${process.env.REACT_APP_VERBENA_PATIENT}/login`}>
                                            <a className="mont-regular text-white font-18 mont-font cursor-pointer">
                                                Patient Log In
                                            </a>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="blog-footer-heading xl:mb-0 lg:mb-0 md-mb-4 sm:mb-4 mb-8">
                            <h5 className="hepta-semibold uppercase text-white mb-4">
                                Provider Services
                            </h5>
                            <div className="blog-footer-links">
                                <ul className="blog-footer-list">
                                    <li>
                                        <a href={`${process.env.REACT_APP_VERBENA_PROVIDER}/login`}>
                                            <a className="mont-regular text-white font-18 mont-font cursor-pointer">
                                                Provider Log In
                                            </a>
                                        </a>
                                    </li>
                                    <li>
                                        <Link className="mont-regular text-white font-18 mont-font cursor-pointer"
                                        to="/contact"
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="mont-regular text-white font-18 mont-font cursor-pointer"
                                        to="/Why-Verbena"
                                        >
                                            Why Verbena?
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="blog-footer-heading xl:mb-0 lg:mb-0 md-mb-4 sm:mb-4 mb-8">
                            <h5 className="hepta-semibold uppercase text-white mb-4">
                                Who We Are
                            </h5>
                            <div className="blog-footer-links">
                                <ul className="blog-footer-list">
                                    <li>
                                        <Link
                                            className="mont-regular text-white font-18 mont-font cursor-pointer"
                                            to="/about"
                                        >
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="mont-regular text-white font-20 mont-font cursor-pointer"
                                            to="/faq"
                                        >
                                            FAQs
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="blog-footer-bottom border-t-2 border-opacity-10">
                        <div className="flex items-center xl:flex-nowrap lg:flex-wrap md:flex-wrap sm:flex-wrap flex-wrap justify-between mt-4">
                            <div className="flex items-center xl:flex-nowrap lg:flex-wrap md:flex-wrap sm:flex-wrap flex-wrap">
                                <div>
                                    <img
                                        src="/images/hipaa.png"
                                        alt=""
                                        title=""
                                    />
                                </div>
                                <div>
                                    <p className="mont-font mont-regular text-white opacity-50 font-16">
                                        Copyright © 2021. All Rights Reserved.
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 xl:mt-0 lg:mt-0 md:mt-4 sm:mt-4 mt-4">
                                <div>
                                    <Link 
                                    to="/termsofuse">
                                    <button className="mont-font mont-regular text-white font-16 cursor-pointer">
                                        Terms of Use
                                    </button>
                                    </Link>
                                </div>
                                <div>
                                <Link 
                                    to="/privacypolicy">
                                    <button className="mont-font mont-regular text-white font-16 cursor-pointer">
                                        Privacy Policy
                                    </button>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;
