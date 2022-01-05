import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import React from "react";

export default function FAQ() {
    const faq = [
        {
            question: "What is Verbena?",
            answer: "Verbena is a comprehensive women’s digital and telehealth platform offering personalized care, consultations, specialty content and healthcare support in partnership with your personal physician. Consultations, care, services and solutions are provided by your chosen provider. Both of you will use the Verbena platform as a supplement to your in-person/in-office medical care.",
        },
        {
            question: "How does Verbena work?",
            answer: "Providers become part of the Verbena network and have access to all of the functions and features of the platform. Providers invite their patients to register to use Verbena as part of their digital and telehealth care options.",
        },
        {
            question: "How do I register for/enroll in Verbena?",
            answer: "You can enroll in Verbena by creating an account at verbenacare.com. If your provider is a current member/subscriber, you can continue care in person as well as with Verbena virtual and digital care options, depending upon the nature of your issue. If your provider is not a Verbena subscriber, we can help you select a participating provider.",
        },
        {
            question:"What kind of information do I need to provide?",
            answer:"In order to register, Verbena will collect basic health information (DOB, height, weight, basic health history) and insurance plan options. Verbena creates a custom patient profile or dashboard that tracks appointments and securely stores your current healthcare information."   
        },
        {
            question:"Can I update my information as needed?",
            answer:"Each time you log into Verbena, you will be able to update your personal and health information as needed."   
        },
        {
            question:"How do I know if my provider is a Verbena member?",
            answer:"The Verbena platform has a searchable directory (by name and location) of participating providers with professional medical information and a current bio."   
        },
        {
            question:"How much does it cost to enroll?",
            answer:"Patients pay an annual fee of $9.99 to have access to the Verbena platform and its digital products, telehealth services, information/content plus scheduling and ongoing communication features."   
        },
        {
            question:"Can I schedule a telehealth visit/appointment using the Verbena platform?",
            answer:"You can self schedule an appointment with your personal/selected provider using the calendar feature on the Verbena platform. In other words, you never have to call the office to schedule, cancel or change your appointment."   
        },
        {
            question:"What if I need to cancel or reschedule my appointment?",
            answer:"No problem. If you need to cancel or reschedule, just log in to your account and follow the prompts on the calendar feature. You will not need to call the office directly. Please note that you need to cancel your appointment 24 hours in advance in order to receive a refund. You can also reschedule your appointment and apply the telehealth fee. You will not receive a refund if you are a no show to your appointment."   
        },
        {
            question:"When are office hours?",
            answer:"Your provider has designated hours which will be featured on his/her profile and calendar page."   
        },
        {
            question:"How will I know if my appointment is confirmed?",
            answer:"Once you schedule your appointment, you will receive a confirmation email as well as a follow up reminder prior to your visit."   
        },
        {
            question:"How long is my telehealth appointment?",
            answer:"The tele-health appointment is approximately 20 minutes -- however, if you need more time that is perfectly fine. If your provider has another appointment he/she will follow up with you shortly thereafter and there will be no extra charge if more time is needed."   
        },
        {
            question:"Will my doctor/provider have my personal health information or concerns available during the appointment?",
            answer:"Once you schedule an appointment, you will fill out a detailed “reason for visit” questionnaire. Your provider will thoroughly review this information prior to your appointment as well as other basic information or electronic health records as needed."   
        },
        {
            question:"What if I am still not feeling well after my telehealth appointment?",
            answer:"Sometimes, follow up is necessary.  Verbena has a direct to provider “chat feature” that will be available for 48 hours until your issue is resolved. If another tele-health visit or an in-person visit is needed let your provider know through the Verbena chat box. You can always call the office as well."   
        },
        {
            question:"Can I schedule an in-office visit using the Verbena platform?",
            answer:"The best way to schedule an in-office visit is by calling the office directly."   
        },
        {
            question:"Can I get new prescriptions or renewals on the Verbena platform?",
            answer:"Prescription renewals are super easy on the Verbena platform. If a new prescription is    necessary just fill out the questionnaire for the problem(s) you are experiencing and the necessary medication/treatment will be ordered by your provider."   
        },
        {
            question:"How much does a telehealth visit/appointment cost?",
            answer:"The tele-health visit fee is $30.00 for a review of your ‘reason for visit’ questionnaire plus a 20-minute video consultation. If you have follow up questions or are not feeling better or your issue(s) has not been resolved within 48 hours, the “visit” remains open during that period for communication and discussion with no additional charge. Any tests; bloodwork, radiology testing or further consultations that need to be ordered and/or assessed as well as prescriptions are reimbursable fees by your insurance provider. Additionally, these results can be reviewed and shared on the Verbena platform as well."   
        },
        {
            question:"Does my insurance cover my telehealth consultation fee?",
            answer:"Your insurance will be billed by your provider accordingly for services rendered. Your only out of pocket expense is the $30.00 tele-health visit/service charge."   
        },
        {
            question:"What if I don’t have insurance?  How much is the visit?",
            answer:"If you don’t have insurance, a Verbena tele-health visit will cost $50.00."   
        },
        {
            question:"What are payment options?",
            answer:"You can pay for your telehealth visit with a credit card directly on the Verbena site.    Your provider will submit any/all insurance claims directly on your behalf. Your credit card statement descriptor will be Verbena Telehealth Visit"   
        },
        {
            question:"Which insurance plans are accepted?",
            answer:"Verbena appointments are subject to the insurance plans that your provider is currently enrolled in. There is a current list of participating providers on the ‘Create An Account’ page."   
        },
        {
            question:"Do I need to submit insurance forms?",
            answer:"Your providers’ office will submit to insurance on your behalf."   
        },
        {
            question:"What if I don’t have insurance?",
            answer:"If you don’t have insurance, the out-of-pocket fee for the Verbena appointment is $50.00"   
        },
        {
            question:"Can I pay out of pocket?",
            answer:"If you have insurance, you don’t have to pay out of pocket except for the $30.00 telehealth visit fee, equivalent to the co-pay,"   
        },
        {
            question:"Is my personal and medical information secure & private?",
            answer:"Verbena stores all of your personal and medical information securely and privately and does not share this information."   
        },
        {
            question:"What is Two Factor Authentication?",
            answer:"Two Factor Authentication (2FA) supplements your password to provide your Verbena account with a second layer of security. We use Google Authenticator which generates a 2-step verification code to your phone. To enable Google Authenticator, you will have to download the app from the Apple Store or Google Apps."   
        },
        {
            question:"Is Verbena HIPPA compliant?",
            answer:"Yes, Verbena is a HIPPA compliant platform. Your personal/medical information is safe and secure."   
        },
        {
            question:"How can I get in touch with my provider through Verbena?",
            answer:"Enroll in Verbena and make an appointment with any Verbena provider. Through the platform you will be able to send and receive messages as it relates to your upcoming and follow up visit."   
        },
        {
            question:"What other resources or health information is available through Verbena?",
            answer:"Our Verbena ‘waiting room’ blog provides medically supervised articles and information related to women’s health and the specialties we address."   
        },
        {
            question:"What if I have a medical emergency?",
            answer:"If you have amedicall emergency call 911 or go to your nearest hospital/emergency room."   
        },
    ];

    return (
        <div className="w-full px-4 pt-48 pb-40">
            <div className="max-w-4xl mx-auto xl:px-8 lg:px-8 md:px-8 sm:px-8 px-8 h-auto mb-10">
                <div className="bg-white rounded-lg pt-10 pl-8 pr-8 pb-8">
                    <h2 className="font-32 question-title-color mb-4 hepta-semibold">Frequently Asked Questions</h2>
                {faq.map((item, index) => (
                    <Disclosure key={index} as="div" className="mt-4">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex justify-between border-b w-full px-0 py-2 text-lg font-semibold text-left">
                                    <span>{item.question}</span>
                                    <ChevronDownIcon
                                        className={`${
                                            open ? "transform rotate-180" : ""
                                        } w-5 h-5`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-0 pt-4 pb-2 text-lg text-gray-500">
                                    {item.answer}
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                ))}
                </div>
            </div>
        </div>
    );
}
