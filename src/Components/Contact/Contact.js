import React from "react";

export default function Contact() {
  return (
    <div className="w-full px-4 pt-48 pb-40">
      <div className="max-w-4xl mx-auto xl:px-8 lg:px-8 md:px-8 sm:px-8 px-8 h-auto mb-10">
        <div className="bg-white rounded-lg pt-10 pl-8 pr-8 pb-8">
        <h2 className="font-32 question-title-color mb-4 hepta-semibold">Contact Us</h2>
        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-3">
                                <div className="input-label calibre-regular mb-4">
                                    First Name
                                </div>
                                <input
                                    type="text"
                                    className="custom-input  input-border-color border"
                                    placeholder="Enter First Name"
                                    
                                />
                                </div>
                                <div className="col-span-3">
                                <div className="input-label calibre-regular mb-4">
                                    Last Name
                                </div>
                                <input
                                    type="text"
                                    className="custom-input  input-border-color border"
                                    placeholder="Enter First Name"
                                    
                                />
                                </div>
                                <div className="col-span-6">
                                <div className="input-label calibre-regular mb-4">
                                    Email
                                </div>
                                <input
                                    type="text"
                                    className="custom-input  input-border-color border"
                                    placeholder="Enter First Name"
                                    
                                />
                                </div>
                                <div className="col-span-6">
                                <div className="input-label calibre-regular mb-4">
                                    Message
                                </div>
                                <textarea className="input-border-color border h-40 w-full rounded-lg" ></textarea>
                                </div>
                                <div className="col-span-6">
                                <button
                                    type="submit"
                                    className="btn-login calibre-regular font-16 leading-none uppercase primary-bg-color text-white"
                                >
                                    Send
                                </button>
                                
                                </div>
                                </div>
        </div>
      </div>
    </div>
  );
}
