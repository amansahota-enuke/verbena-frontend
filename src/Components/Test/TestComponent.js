import React from 'react'

function TestComponent() {
    return (
        <div>

                {/* Home page Section */}

                <div className="health-care-explore relative mt-40">
                <span className="absolute right-0 top-0"><img src="images/explore-bg.png" alt="" title=""/></span>
                    <div className="flex justify-start">
                        <div class="health-explore-content">
                            <h3 className="font-72 hepta-semibold mb-5 question-title-color leading-tight">Your Doctor. <br/>Your Care. <br/>Your Time.</h3>
                            <p className="mont-font mont-regular font-20 mb-5">We are a comprehensive women’s health platform offering digital care and telemedicine services to patients, together with their personal doctor—anywhere, anytime.</p>
                            <button type="submit" class="btn-login calibre-bold font-18 uppercase primary-bg-color text-white mr-3">Explore</button>
                        </div>
                    </div>
                </div>


                {/* Our Values */}

                <div className="our-values-wrapper mt-40 mb-20">
                    <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-6">
                        <div className="value-box rounded-xl relative shadow-xl overflow-hidden px-9 py-12 bg-white">
                            <span className="vector absolute top-0 right-0"><img src="/images/cloud-vector.png" alt="" title=""/></span>
                            <h4 className="hepta-semibold font-24 text-gray-dim mb-4">Care + <br/>Consultations</h4>
                            <p className="mont-font mont-regular font-18 light-dim-gray-color mb-3">Telehealth Visits, In-office Visits, Sick Visits, Well Visits, Routine Procedures, Emotional Health</p>
                            <a className="primary-text-color mont-font mont-bold" href="#">Read More</a>
                        </div>
                        <div className="value-box rounded-xl relative shadow-xl overflow-hidden px-9 py-12 bg-white">
                            <span className="vector absolute top-0 right-0"><img src="/images/cloud-vector.png" alt="" title=""/></span>
                            <h4 className="hepta-semibold font-24 text-gray-dim mb-4">Evaluations + <br/>Assessments</h4>
                            <p className="mont-font mont-regular font-18 light-dim-gray-color mb-3">Lab Results, Diagnostics Review, Treatment Plans</p>
                            <a className="primary-text-color mont-font mont-bold" href="#">Read More</a>
                        </div>
                        <div className="value-box rounded-xl relative shadow-xl overflow-hidden px-9 py-12 bg-white">
                            <span className="vector absolute top-0 right-0"><img src="/images/cloud-vector.png" alt="" title=""/></span>
                            <h4 className="hepta-semibold font-24 text-gray-dim mb-4">Medication + <br/>Prescriptions</h4>
                            <p className="mont-font mont-regular font-18 light-dim-gray-color mb-3">New, Renewals, Symptom Specific, Medicine Management</p>
                            <a className="primary-text-color mont-font mont-bold" href="#">Read More</a>
                        </div>
                    </div>
                </div>


                {/* What our patients say */}

                <div className="our-patient-wrapper text-center mt-40 mb-40">
                    <div className="patient-wrapper-title">
                        <h4 className="uppercase font-18 mb-6 primary-text-color">What Our Patients Say</h4>
                    </div>


                    <div className="testimonial-carousel">
                        <div className="item text-center">
                            <p className="font-44 hepta-semibold text-gray-dim lh-40">Verbena is an easy and affordable <br/>way to connect with my doctor <br/>from the convenience of my home.</p> 
                            <div className="flex justify-center items-center mt-8">
                                <div>
                                    <div className="user-img mr-4"></div>
                                </div>
                                <div className="user-name text-left">
                                    <h3 className="hpta-semibold font-24 primary-text-color">Michelle</h3>
                                    <p className="text-gray-dim font-18 mont-font mont-regular">Verbena Patient</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>


                <div className="health-care-way relative mt-90">
                    <span className="absolute left-0 top-0"><img src="images/health-care-bg.png" alt="" title=""/></span>
                    <div className="flex justify-end">
                        <div class="health-care-content">
                            <h3 className="font-72 hepta-semibold mb-5 question-title-color leading-tight">Healthcare <br/>Her Way.</h3>
                            <p className="mont-font mont-regular font-20 mb-5">Created with her care in mind, Verbena celebrates the unique health needs throughout her lifetime—from menstruation to menopause (and everything in between). We provide a secure and direct line of communication to your personal doctor/provider anytime, anywhere.</p>
                            <button type="submit" class="btn-login calibre-bold font-18 uppercase primary-bg-color text-white mr-3">Get Started</button>
                        </div>
                    </div>
                </div>



                {/* About Us */}

                <div className="about-us-wrapper mt-40">
                    <div className="about-wrapper-title mb-20 text-center">
                        <h2 className="hepta-semibold text-gray-dim font-56 mb-10">About Us</h2>
                        <p className="mont-font mont-regular font-20 text-gray-dim">We started Verbena because we wanted to transform the way women engage <br/> and interact with their personal physician in a safe, accessible and convenient way.</p>
                    </div>

                    {/* Mission Vision wrapper */}

                    <div className="flex flex-wrap justify-between">
                        <div className="mission mv-box">
                            <div className="mission-img mv-img overflow-hidden rounded-md shadow"></div>
                            <div className="mv-content relative px-10 py-6 bg-white overflow-hidden rounded-lg shadow-lg">
                                <h5 className="uppercase question-title-color mb-4 hepta-semibold">Our Mission</h5>
                                <p className="text-gray-dim font-27">Empower women to take <br/> charge of their healthcare in a <br/> safe, private, and convenient way.</p>
                            </div>
                        </div>
                        <div className="vision mv-box">
                            <div className="vision-img mv-img overflow-hidden rounded-md shadow"></div>
                            <div className="mv-content relative px-10 py-6 bg-white overflow-hidden rounded-lg shadow-lg">
                                <h5 className="uppercase question-title-color mb-4 hepta-semibold">Our Vision</h5>
                                <p className="text-gray-dim font-27">To provide a superior <br/>women’s telehealth <br/>platform that elevates <br/>and enhances the overall patient-<br/>provider experience.</p>
                            </div>
                        </div>
                    </div>



                </div>


                {/* Get Consultation */}
                <div className="box-white bg-white rounded-2xl shadow-md mt-40 overflow-hidden mb-24">
                    <div className="get-consult grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1">
                        <div className="p-10 get-consult-form">
                            <img src="images/get-consult-logo.png" alt="" title=""/>
                            <h3 className="mont-font mont-extra-light font-40 mb-2 light-gray-dim mt-4">Get a Consultation</h3>
                            <p className="mont-font mont-regular font-20 mb-10 light-gray-dim">Fill in your information to take the first step in joining the Verbena platform.</p>
                            <div className="form-input">
                                <div className="flex mb-4">
                                    <input type="text" class="custom-input input-border-color border" placeholder="Your Name" name="name"/>
                                </div>
                                <div className="flex mb-8">
                                    <input type="text" class="custom-input input-border-color border" placeholder="Your Email" name="email"/>
                                </div>
                                <button type="submit" class="btn-login calibre-bold font-18 uppercase primary-bg-color text-white mr-3">Submit</button>
                            </div>
                        </div>
                        <div>
                            <div class="drop-message-box p-10 drop-msg-bg">
                                <h5 className="uppercase hepta-semibold question-title-color mb-10 mt-16">have a question? Let us know.</h5>
                                <div className="flex mb-10">
                                    <div class="mr-4">
                                        <span className="msg-ico"></span>
                                    </div>
                                    <div>
                                        <h4 className="mont-font font-20 mont-bold">info@verbenacare.com</h4>
                                        <p className="mb-0 mont-font mont-regular font-20 light-gray-dim">Drop us a message with any questions or concerns about the platform.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="newsletter-bg newletter-wrapper p-10">
                                <h3 className="hepta-semibold font-40 mb-5 text-white">Newsletter</h3>
                                <div className="newsletter-form mb-10">
                                    <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-3">
                                        <div>
                                            <input type="text" class="custom-input input-border-color border" placeholder="Your Email" name="email"/>  
                                        </div>
                                        <div>
                                        <button type="submit" class="btn-login calibre-bold font-18 uppercase primary-bg-color text-white mr-3">Subscribe</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Our Blog */}

                <div className="our-blog-wrapper">
                    <div className="blog-title-wrapper text-center mb-24">
                        <h5 className="hepta-semibold uppercase blog-subtitle-color mb-5">Our Blog</h5>
                        <h2 className="hepta-semibold text-white font-40">Check out our Verbena blog for <br/> the latest articles on women’s health.</h2>
                    </div>

                    <div className="our-blog-grid">
                        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4">
                            <div className="overflow-hidden rounded-lg shadow-sm relative">
                                <span className="blog-category bg-black opacity-50 absolute top-6 left-5 pt-1 pb-1 pl-2 pr-2 rounded text-white font-16 mont-font mont-regular">Category 1</span>

                                <div className="blog-image-wrapper"></div>
                                <div className="blog-heading px-6 py-4 bg-white">
                                    <h4 class="text-gray-dim font-24 hepta-semibold m-0">The best vitamins <br/> for your lifestyle</h4>
                                </div>
                            </div>
                            <div className="overflow-hidden rounded-lg shadow-sm relative">
                                <span className="blog-category bg-black opacity-50 absolute top-6 left-5 pt-1 pb-1 pl-2 pr-2 rounded text-white font-16 mont-font mont-regular">Category 1</span>

                                <div className="blog-image-wrapper"></div>
                                <div className="blog-heading px-6 py-4 bg-white">
                                    <h4 class="text-gray-dim font-24 hepta-semibold m-0">Our top five recos for <br/>the menopausal life</h4>
                                </div>
                            </div>
                            <div className="overflow-hidden rounded-lg shadow-sm relative">
                                <span className="blog-category bg-black opacity-50 absolute top-6 left-5 pt-1 pb-1 pl-2 pr-2 rounded text-white font-16 mont-font mont-regular">Category 1</span>

                                <div className="blog-image-wrapper"></div>
                                <div className="blog-heading px-6 py-4 bg-white">
                                    <h4 class="text-gray-dim font-24 hepta-semibold m-0">Finding the best birth <br/> control for you</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="see-more flex justify-center mt-10">
                        <a href="#" class="btn-login calibre-bold font-18 uppercase primary-bg-color text-white mr-3">See More</a>
                    </div>

                </div>

        </div>
    )
}

export default TestComponent
