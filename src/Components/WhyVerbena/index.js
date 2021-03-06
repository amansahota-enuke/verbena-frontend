import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import React from "react";

export default function WhyVerbena() {
  const why = [
    {
      question: "Why is a good telehealth solution necessary?",
      answer:
        "Complete telehealth solutions (TH) help providers deliver the best patient experience. With a good TH system patient satisfaction will increase resulting in new patient acquisition and patient retention. ",
    },
    {
      question: "Superior Patient + Provider User Experience",
      answer:
        "The UEX for both patient and provider was designed for ease and efficiency.  It is straight-forward and simple to access, update,  upload, schedule and manage.",
    },
    {
      question: "Easy Scheduling + Follow Up",
      answer:
        "The TH platform must have an easy digital front door, in other words scheduling should be easy and intuitive. Verbena offers seamless appointment scheduling for the patient and accessible calendar management for the provider.  Within the platform there is also a direct line of communication between patient and provider for 48 hours after the appointment.",
    },
    {
      question: "Trusted + Thorough",
      answer:
        "The healthcare encounter should be a trusted and thorough experience. The complete Verbena experience is branded with the patient’s healthcare provider/practice.  It is very clear that the patient is in direct communication with their current/chosen provider, resulting in a more trusted and thorough experience. All patient and provider information is safely stored on our HIPPA compliant servers in partnership with AWS",
    },
    {
      question: "Security + Compliance",
      answer:
        "Security and compliance are of the utmost importance to Verbena and our providers and patients. We have been thoroughly vetted and trained in HIPPA Compliance procedures and policies as well as our 3rd party vendors, cloud storage, payment and scheduling. For safety and security reasons, we require participating providers to update/reset their password every 90 days. You will receive a pop-up reminder from Verbena. Our passwords also require a combination of upper and lower case letters, symbols and numbers. In addition, Verbena also requires our providers to use a 2-step verification process to Log In. Two Factor Authentication (2FA) supplements your password to provide your Verbena account with a second layer of security. We use Google Authenticator which generates a 2-step verification code to your phone. To enable Google Authenticator, you will have to download the app from the Apple Store or Google Apps.",
    },
    {
      question: "Personal + Personalized Consultations",
      answer:
        "Each visit is personalized by precise workflow tools exclusive to Verbena. By using asynchronous triage assessments prior to each TH visit, a more complete live encounter takes place. This makes the TH appointment timely and efficient for both the patient and the provider. Following each visit, you will be able to systematically combine the SOAP notes for easy transfer to the EHR.",
    },
    {
      question: "Patient Rich Content",
      answer:
        "The virtual waiting room has engaging content to keep the patient informed on topics that fits the interest and needs of the patient.",
    },
    {
      question: "On-board Support",
      answer:
        "Verbena is ready with training and technical support. Our Super Administrator provides on-board training to physicians and their staffs and is available for customer service for providers, office managers and patients a like.",
    },
    {
      question: "Time Efficient",
      answer:
        "Increased efficiency allows you to manage and scale your business. Our TH visits are controlled and focus on the immediate patient concern. This allows  you to see more patients in less time in your office or your home.",
    },
    {
      question: "Why you need more than EMR for TH",
      answer:
        "Many EMR systems now offer virtual add-ons, but they are typically not effective overall in terms of satisfaction and efficiency. Verbena offers a complete solution, from consents forms, appointment reminders, scheduling, pre-consult assessment, virtual connection and post appointment follow up along with patient engagement tools that make the journey comprehensive and engaging. The platform tracks  who and why patients are using the TH solution which can help support and boost your practice.",
    },
  ];

  return (
    <div className="w-full px-4 pt-48 pb-40">
      <div className="max-w-4xl mx-auto xl:px-8 lg:px-8 md:px-8 sm:px-8 px-8 h-auto mb-10">
        <div className="bg-white rounded-lg pt-10 pl-8 pr-8 pb-8">
          <h2 className="font-32 question-title-color mb-4 hepta-semibold">
            Why Verbena?
          </h2>
          {why.map((item, index) => (
            <Disclosure key={index} as="div" className="mt-4">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between border-b w-full px-0 py-2 text-lg font-semibold text-left">
                    <span>{item.question}</span>
                    <ChevronUpIcon
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
