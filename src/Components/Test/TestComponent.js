import React from 'react'

function TestComponent() {
    return (
        <div>

                {/* About Us Section */}
                <div className="about-us-wrapper mt-40 mb-40">
                    <div className=" grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-6 items-center">
                        <div className="about-us-img">
                            <img src="/images/about-us-img.png" alt="" title=""/>
                        </div>
                        <div className="about-us-content">
                            <h2 className="font-72 question-title-color mb-4 hepta-semibold">About Us.</h2>
                            <p className="font-20 mont-font mont-regular text-gray-dim mb-4">We are a comprehensive women’s health platform offering digital care and telemedicine services to patients, together with their personal doctor—anywhere, anytime.</p>
                            <button type="submit" class="btn-login calibre-bold font-18 uppercase primary-bg-color text-white mr-3">Get Started</button>
                        </div>
                    </div>
                </div>


                {/* who we are */}

                <div className="who-we-are-wrapper">
                    <div className="who-we-are-title text-center">
                        <h5 className="uppercase question-title-color font-18 hepta-semibold mb-4">WHO WE ARE</h5>
                        <h2 className="font-56 text-gray-dim mb-4 hepta-semibold">Meet Our Founders</h2>
                    </div>

                    <div className="who-we-are-grid mt-10">
                        <div className="grid xl:grid-col-2 lg:grid-cols-2 md:grid-col-1 sm:grid-cols-1 grid-cols-1 gap-6">
                            <div className="bg-white rounded-xl overflow-hidden shadow-xl p-10">
                                <div className="flex items-center mb-4">
                                    <div className="founder-img mr-4"></div>
                                    <div className="founder-name">
                                        <h4 className="font-28 hepta-semibold mb-0 question-title-color">Dr. Karen Patrusky</h4>
                                    </div>
                                </div>
                                <p className="font-18 mont-font mont-regular">Dr. Karen Patrusky is a board certified obstetrician and gynecologist. A graduate of Tufts University, Patrusky went on to receive her medical degree from The Mount Sinai School of Medicine where she also completed her residency in Obstetrics and Gynecology. For over 20 years, she has been in private practice taking care of women of all ages.</p>
                            </div>
                            <div className="bg-white rounded-xl overflow-hidden shadow-xl p-10">
                                <div className="flex items-center mb-4">
                                    <div className="founder-img mr-4"></div>
                                    <div className="founder-name">
                                        <h4 className="font-28 hepta-semibold mb-0 question-title-color">Heidi Edelstein</h4>
                                    </div>
                                </div>
                                <p className="font-18 mont-font mont-regular">Heidi Edelstein is an accomplished Marketing Executive with more than 25 years of integrated marketing experience.  A graduate of Tulane University, she has worked for leading women’s lifestyle brands and is recognized as both a strategic and creative industry leader.</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Our Story Section */}

                <div className="our-story- mt-40">
                    <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-10">
                        <div>
                            <h5 className="font-18 question-title-color mb-6 uppercase hepta-semibold">where we started</h5>
                            <h2 className="text-gray-dim font-56 hepta-semibold mb-6">Our Story</h2>
                            <p className="mont-font mont-regular font-20 text-gray-dim">After 20 years, Dr. Patrusky thought there must be a better and more convenient way to serve her patients. Rather than lengthy in-person visits and crowded waiting rooms, she envisioned a new way for patients to connect with their doctors, a way that would maintain the personal patient-doctor relationship while seamlessly fitting into their busy schedules. </p>
                        </div>
                        <div>
                            <div className="our-story-img">
                                <img src="/images/our-story-right.png" alt="" title=""/>
                            </div>
                        </div>


                        <div>
                            <div className="our-story-img">
                                <img src="/images/our-story-left.png" alt="" title=""/>
                            </div>
                        </div>
                        <div>
                            <p className="mont-font mont-regular font-20 text-gray-dim">At the same time, the world was hit with COVID-19 and her original idea was actually forced to become a reality. Dr. Patrusky spent a year navigating the many challenges associated with the pandemic including but not limited to providing easy remote access and quality medical care to her patients. The realization that alternative digital services could supplement traditional patient care practices is what inspired her to move forward with her vision. With Heidi Edelstein’s decades of experience in branding & marketing, the two launched Verbena as a premiere women’s digital healthcare platform, designed to care for her health, with her doctor, on her time.</p>
                        </div>
                        

                    </div>
                </div>


                {/* What we stand for section */}

                <div className="what-we-stand-wrapper mt-40 mb-40">
                    <div className="what-we-stand-title text-center">
                        <h3 className="font-18 question-title-color mb-4 uppercase">What we stand for</h3>
                        <h2 className="font-28 hepta-semibold text-gray-dim leading-snug">“We started Verbena because we wanted to transform the way women engage and interact with their personal physician in a safe, accessible and convenient way. We wanted to create a seamless, modern, fully integrated solution that empowers women to take charge of their sexual health—from menstruation to menopause—in partnership with their trusted physician. Verbena is healthcare her way. Verbena is healthcare your way.”</h2>
                    </div>
                </div>





                {/* Verbena Services Home Page Section */}

                <div className="health-care-explore relative mt-40 mb-64">
                    <span className="absolute right-0 top-0"><img src="/images/service-home-bg.png" alt="" title=""/></span>
                    <div className="flex justify-start">
                        <div class="health-explore-content">
                            <h3 className="font-72 hepta-semibold mb-5 question-title-color leading-tight">How Can <br/>We Help You?</h3>
                            <p className="mont-font mont-regular font-20 mb-5">We offer a range of services to best address your<br/> healthcare needs.</p>
                            <button type="submit" class="btn-login calibre-bold font-18 uppercase primary-bg-color text-white mr-3">Get Started</button>
                        </div>
                    </div>
                </div>

                <div className="what-we-do">
                    <div className="what-we-do-wrapper text-center">
                        <h5 className="font-18 question-title-color uppercase mb-4 hepta-semibold">what we do</h5>
                        <h5 className="font-56 text-gray-dim mb-4 hepta-semibold">The Care You Need, When You Need It</h5>
                        <p className="mont-font mont-regular font-20 text-gray-dim m-auto mxw-780">Timely digital access and telehealth visits with your personal doctor that is HIPPA compliant and securely stored on our servers.</p>
                    </div>
                </div>


                {/* Services page Second Section */}

                <section className="what-we-do-grid mt-24">
                    <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-6">
                        <div className="bg-white relative overflow-hidden rounded-lg shadow-xl pl-6 pr-6 pb-6 pt-24">
                            <span className="absolute left-0 top-0"><img src="/images/cloud-vector-left.png" alt="" title=""/></span>
                            <h4 className="font-24 hepta-semibold light-green-color text-right">Consultations +<br/>Treatments</h4>
                        </div>
                        <div className="bg-white relative overflow-hidden rounded-lg shadow-xl pl-6 pr-6 pb-6 pt-24">
                            <span className="absolute left-0 top-0"><img src="/images/cloud-vector-left.png" alt="" title=""/></span>
                            <h4 className="font-24 hepta-semibold light-green-color text-right">Prescription <br/>Renewal  </h4>
                        </div>
                        <div className="bg-white relative overflow-hidden rounded-lg shadow-xl pl-6 pr-6 pb-6 pt-24">
                            <span className="absolute left-0 top-0"><img src="/images/cloud-vector-left.png" alt="" title=""/></span>
                            <h4 className="font-24 hepta-semibold light-green-color text-right">Telehealth <br/>Medicine</h4>
                        </div>
                        <div className="bg-white relative overflow-hidden rounded-lg shadow-xl pl-6 pr-6 pb-6 pt-24">
                            <span className="absolute left-0 top-0"><img src="/images/cloud-vector-left.png" alt="" title=""/></span>
                            <h4 className="font-24 hepta-semibold light-green-color text-right">Laboratory <br/>Testing </h4>
                        </div>
                        <div className="bg-white relative overflow-hidden rounded-lg shadow-xl pl-6 pr-6 pb-6 pt-24">
                            <span className="absolute left-0 top-0"><img src="/images/cloud-vector-left.png" alt="" title=""/></span>
                            <h4 className="font-24 hepta-semibold light-green-color text-right">Health +<br/>Wellness Education</h4>
                        </div>
                        <div className="bg-white relative overflow-hidden rounded-lg shadow-xl pl-6 pr-6 pb-6 pt-24">
                            <span className="absolute left-0 top-0"><img src="/images/cloud-vector-left.png" alt="" title=""/></span>
                            <h4 className="font-24 hepta-semibold light-green-color text-right">Evaluations +<br/>Assessments</h4>
                        </div>
                    </div>
                </section>



                {/* for woman's Needs at Every  Stage */}

                <div className="woman-stage-wrapper mt-64 mb-32">
                    <div className="woman-need-flex">
                        <div className="woman-need-content">
                            <h3 className="mb-10 font-20 text-gray-dim uppercase question-title-color">what we offer</h3>
                            <h2 className="font-56 text-gray-dim mb-5 hepta-semibold leading-tight">For a Woman’s Needs at <br/> Every Stage</h2>
                            <p className="mont-font mont-regular font-20 text-gray-dim mxw-530 mb-20">Created with her care in mind, Verbena celebrates the unique health needs throughout her lifetime.</p>
                            <button type="submit" class="btn-login calibre-bold font-18 uppercase primary-bg-color text-white mr-3">Read More</button>
                        </div>
                    </div>
                </div>


                {/* women need boxes health */}

                <div className="woman-need-grid">
                    <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-6">
                        <div className="bg-white relative overflow-hidden rounded-xl shadow-xl pl-10 pr-10 pt-28 pb-28">
                            <span className="absolute top-0 right-0"><img src="/images/cloud-vector.png" title="" alt=""/></span>
                            <h3 className="font-24 hepta-semibold question-title-color mb-2">Adolescent + Young Adult Health</h3>
                            <p className="font-18 mont-font mont-regular text-gray-dim">Birth Control, STI Testing, UTI Treatment <br/> Vaginal Infection, Menstrual Issues</p>
                        </div>
                        <div className="bg-white relative overflow-hidden rounded-xl shadow-xl pl-10 pr-10 pt-28 pb-28">
                            <span className="absolute top-0 right-0"><img src="/images/cloud-vector.png" title="" alt=""/></span>
                            <h3 className="font-24 hepta-semibold question-title-color mb-2">Reproductive Health</h3>
                            <p className="font-18 mont-font mont-regular text-gray-dim">Contraception, Unintended Pregnancy, Morning After Pill, Fertility Concerns, Preconception Counseling</p>
                        </div>
                        <div className="bg-white relative overflow-hidden rounded-xl shadow-xl pl-10 pr-10 pt-28 pb-28">
                            <span className="absolute top-0 right-0"><img src="/images/cloud-vector.png" title="" alt=""/></span>
                            <h3 className="font-24 hepta-semibold question-title-color mb-2">Obstetrics + Post-Partum Care</h3>
                            <p className="font-18 mont-font mont-regular text-gray-dim">Post-Delivery Check Up, Breast Feeding Concerns Post-Partum Contraception, Post Partum Mood Changes</p>
                        </div>
                        <div className="bg-white relative overflow-hidden rounded-xl shadow-xl pl-10 pr-10 pt-28 pb-28">
                            <span className="absolute top-0 right-0"><img src="/images/cloud-vector.png" title="" alt=""/></span>
                            <h3 className="font-24 hepta-semibold question-title-color mb-2">Sexual Health</h3>
                            <p className="font-18 mont-font mont-regular text-gray-dim">UTI Treatment, Vaginal Irritation, STI Concerns Libido, Painful Sex</p>
                        </div>
                        <div className="bg-white relative overflow-hidden rounded-xl shadow-xl pl-10 pr-10 pt-28 pb-28">
                            <span className="absolute top-0 right-0"><img src="/images/cloud-vector.png" title="" alt=""/></span>
                            <h3 className="font-24 hepta-semibold question-title-color mb-2">Peri + Menopausal Health</h3>
                            <p className="font-18 mont-font mont-regular text-gray-dim">Hot Flashes, Mood + Sleep Disruption, Sexual Dysfunction Hormone Concerns, Bone Health</p>
                        </div>
                        <div className="pl-10 pr-10 pt-28 pb-28">
                            <h3 className="font-24 hepta-semibold question-title-color mb-2">Is there something we didn’t mention that we can help you with?</h3>
                            <button type="submit" class="btn-login calibre-bold font-18 uppercase primary-bg-color text-white mr-3">Reach Out</button>
                        </div>
                    </div>
                </div>


                {/* What we stand for section */}

                <div className="what-we-stand-wrapper mt-40 mb-40">
                    <div className="what-we-stand-title text-center">
                        <h3 className="font-18 question-title-color mb-4 uppercase">What we stand for</h3>
                        <h2 className="font-44 leading-tight hepta-semibold text-gray-dim">We believe patients deserve access to quality, personalized care no matter where they are.</h2>
                    </div>
                </div>


                {/* Home page Section */}

                <div className="health-care-explore relative mt-40">
                <span className="absolute right-0 top-0"><img src="/images/explore-bg.png" alt="" title=""/></span>
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
                            <span className="vector absolute top-3 right-0"><img src="/images/value-box-ico-1.png" alt="" title=""/></span>
                            <h4 className="hepta-semibold font-24 text-gray-dim mb-4">Care + <br/>Consultations</h4>
                            <p className="mont-font mont-regular font-18 light-dim-gray-color mb-3">Telehealth Visits, In-office Visits, Sick Visits, Well Visits, Routine Procedures, Emotional Health</p>
                            <a className="primary-text-color mont-font mont-bold" href="#">Read More</a>
                        </div>
                        <div className="value-box rounded-xl relative shadow-xl overflow-hidden px-9 py-12 bg-white">
                            <span className="vector absolute top-3 right-0"><img src="/images/value-box-ico-2.png" alt="" title=""/></span>
                            <h4 className="hepta-semibold font-24 text-gray-dim mb-4">Evaluations + <br/>Assessments</h4>
                            <p className="mont-font mont-regular font-18 light-dim-gray-color mb-3">Lab Results, Diagnostics Review, Treatment Plans</p>
                            <a className="primary-text-color mont-font mont-bold" href="#">Read More</a>
                        </div>
                        <div className="value-box rounded-xl relative shadow-xl overflow-hidden px-9 py-12 bg-white">
                            <span className="vector absolute top-3 right-0"><img src="/images/value-box-ico-3.png" alt="" title=""/></span>
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
                    <span className="absolute left-0 top-0"><img src="/images/health-care-bg.png" alt="" title=""/></span>
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
                            <img src="/images/get-consult-logo.png" alt="" title=""/>
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
                                        <span className="msg-ico"><img src="/images/mail-ico.png" alt="" title=""/></span>
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
