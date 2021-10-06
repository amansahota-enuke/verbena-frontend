import React from "react";

function Founders() {
    return (
        <div className="who-we-are-wrapper">
            <div className="who-we-are-title text-center">
                <h5 className="uppercase question-title-color font-18 hepta-semibold mb-4">
                    WHO WE ARE
                </h5>
                <h2 className="font-72 question-title-color mb-10 hepta-semibold">
                    Meet Our Founders
                </h2>
            </div>

            <div className="who-we-are-grid mt-10">
                <div className="grid xl:grid-col-2 lg:grid-cols-2 md:grid-col-1 sm:grid-cols-1 grid-cols-1 gap-6">
                    <div data-aos="fade-down" data-aos-duration="1000" className="bg-white rounded-xl overflow-hidden shadow-xl p-10">
                        <div className="flex items-center mb-4">
                            <div className="founder-img mr-4 flex-shrink-0"></div>
                            <div className="founder-name">
                                <h4 className="font-24 hepta-semibold mb-0 question-title-color">
                                    Dr. Karen Patrusky
                                </h4>
                            </div>
                        </div>
                        <p className="font-16 mont-font mont-regular">
                            Dr. Karen Patrusky is a board certified obstetrician
                            and gynecologist. A graduate of Tufts University,
                            Dr. Patrusky went on to receive her medical degree from
                            The Mount Sinai School of Medicine where she also
                            completed her residency in Obstetrics and
                            Gynecology. For over 20 years, she has been in
                            private practice taking care of women of all ages.
                        </p>
                    </div>
                    <div data-aos="fade-down" data-aos-duration="2000" className="bg-white rounded-xl overflow-hidden shadow-xl p-10">
                        <div className="flex items-center mb-4">
                            <div className="founder-img mr-4 flex-shrink-0"></div>
                            <div className="founder-name">
                                <h4 className="font-24 hepta-semibold mb-0 question-title-color">
                                    Heidi Edelstein
                                </h4>
                            </div>
                        </div>
                        <p className="font-16 mont-font mont-regular">
                            Heidi Edelstein is an accomplished Marketing
                            Executive with more than 25 years of integrated
                            marketing experience. A graduate of Tulane
                            University, she has worked for leading women’s
                            lifestyle brands and is recognized as both a
                            strategic and creative industry leader.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Founders;
