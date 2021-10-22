import { Dialog } from "@headlessui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { ConfirmationActions } from "../../redux/slice/confirmation.slice";

function SubscribeConfirmation() {
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(ConfirmationActions.closeConfirmation());
    };

    return (
        <>
            <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
            >
                Subscription successful
            </Dialog.Title>
            <div className="mt-2">
                <p className="text-sm text-gray-500">
                    Thank you for subscribing to the Verbena newsletter
                    message
                </p>
            </div>

            <div className="mt-4 text-center">
                <button
                    type="button"
                    className="btn-login calibre-regular font-16 uppercase primary-bg-color text-white"
                    onClick={closeModal}
                >
                    Got it, thanks!
                </button>
            </div>
        </>
    );
}

export default SubscribeConfirmation;