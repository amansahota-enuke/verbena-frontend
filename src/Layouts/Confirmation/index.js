import { Dialog, Transition } from "@headlessui/react";
import React from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";

import confirmationConstants from "../../constants/confirmation.constants";
import selector from "../../redux/selector";
import TestConfirmation from "./TestConfirmation";
import SubscribeConfirmation from "./SubscibeConfirmation";
import ProviderDetail from "./ProviderDetail";

const Confirmation = () => {
  const isOpen = useSelector(selector.confirmationStatus);

  const confirmationType = useSelector(selector.confirmationType);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={() => console.log("Do nothing")}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div
                className={`${
                  confirmationType === confirmationConstants.PROVIDER_DETAIL
                    ? "w-3/4"
                    : "w-full max-w-md"
                } inline-block p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl`}
              >
                <SelectedConfirmation />
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

const SelectedConfirmation = () => {
  const confirmationType = useSelector(selector.confirmationType);

  switch (confirmationType) {
    case "Test_value":
      return <TestConfirmation />;
    case confirmationConstants.PROVIDER_DETAIL:
      return <ProviderDetail />;
    case confirmationConstants.SUBSCRIBE_CONFIRMATION:
      return <SubscribeConfirmation />;
    default:
      return "";
  }
};

export default Confirmation;
