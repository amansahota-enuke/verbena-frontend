import React from "react";

function Health() {
    return (
        <div className="woman-need-grid">
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-6">
                <div className="bg-white relative overflow-hidden rounded-xl shadow-xl pl-10 pr-10 pt-28 pb-28">
                    <span className="absolute top-0 right-0">
                        <img src="/images/cloud-vector.png" title="" alt="" />
                    </span>
                    <h3 className="font-24 hepta-semibold question-title-color mb-2">
                        Adolescent + Young Adult Health
                    </h3>
                    <p className="font-18 mont-font mont-regular text-gray-dim">
                        Birth Control, STI Testing, UTI Treatment <br /> Vaginal
                        Infection, Menstrual Issues
                    </p>
                </div>
                <div className="bg-white relative overflow-hidden rounded-xl shadow-xl pl-10 pr-10 pt-28 pb-28">
                    <span className="absolute top-0 right-0">
                        <img src="/images/cloud-vector.png" title="" alt="" />
                    </span>
                    <h3 className="font-24 hepta-semibold question-title-color mb-2">
                        Reproductive Health
                    </h3>
                    <p className="font-18 mont-font mont-regular text-gray-dim">
                        Contraception, Unintended Pregnancy, Morning After Pill,
                        Fertility Concerns, Preconception Counseling
                    </p>
                </div>
                <div className="bg-white relative overflow-hidden rounded-xl shadow-xl pl-10 pr-10 pt-28 pb-28">
                    <span className="absolute top-0 right-0">
                        <img src="/images/cloud-vector.png" title="" alt="" />
                    </span>
                    <h3 className="font-24 hepta-semibold question-title-color mb-2">
                        Obstetrics + Post-Partum Care
                    </h3>
                    <p className="font-18 mont-font mont-regular text-gray-dim">
                        Post-Delivery Check Up, Breast Feeding Concerns
                        Post-Partum Contraception, Post Partum Mood Changes
                    </p>
                </div>
                <div className="bg-white relative overflow-hidden rounded-xl shadow-xl pl-10 pr-10 pt-28 pb-28">
                    <span className="absolute top-0 right-0">
                        <img src="/images/cloud-vector.png" title="" alt="" />
                    </span>
                    <h3 className="font-24 hepta-semibold question-title-color mb-2">
                        Sexual Health
                    </h3>
                    <p className="font-18 mont-font mont-regular text-gray-dim">
                        UTI Treatment, Vaginal Irritation, STI Concerns Libido,
                        Painful Sex
                    </p>
                </div>
                <div className="bg-white relative overflow-hidden rounded-xl shadow-xl pl-10 pr-10 pt-28 pb-28">
                    <span className="absolute top-0 right-0">
                        <img src="/images/cloud-vector.png" title="" alt="" />
                    </span>
                    <h3 className="font-24 hepta-semibold question-title-color mb-2">
                        Peri + Menopausal Health
                    </h3>
                    <p className="font-18 mont-font mont-regular text-gray-dim">
                        Hot Flashes, Mood + Sleep Disruption, Sexual Dysfunction
                        Hormone Concerns, Bone Health
                    </p>
                </div>
                <div className="pl-10 pr-10 pt-28 pb-28">
                    <h3 className="font-24 hepta-semibold question-title-color mb-2">
                        Is there something we didn’t mention that we can help
                        you with?
                    </h3>
                    <button
                        type="submit"
                        className="btn-login calibre-bold font-18 uppercase primary-bg-color text-white mr-3"
                    >
                        Reach Out
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Health;
