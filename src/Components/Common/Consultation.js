import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { CommonService } from "../../services";
import { Loader } from "../";
import { ConfirmationActions } from "../../redux/slice/confirmation.slice";
import confirmationConstants from "../../constants/confirmation.constants";

function Consultation() {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(true);
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [providers, setProviders] = useState([]);
  const [selectedProvider, setSelectedProvider] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const getStates = async () => {
    try {
      const response = await CommonService.getStates();
      setStates(response.data.data);
      setLoader(false);
    } catch (error) {
      setLoader(false);
      console.log(error);
    }
  };

  const showPopUp = () => {
    setIsOpen(!isOpen);
  };

  const getProviders = async () => {
    try {
      setLoader();
      const response = await CommonService.getProviderList({
        state: selectedState,
      });
      setProviders(response.data.data);
      setLoader(false);
    } catch (error) {
      setLoader(false);
      console.log(error);
    }
  };

  const openProviderConfirmation = () => {
    dispatch(ConfirmationActions.setConfirmationProvider(selectedProvider));
    dispatch(
      ConfirmationActions.setConfirmationType(
        confirmationConstants.PROVIDER_DETAIL
      )
    );
    dispatch(ConfirmationActions.openConfirmation());
  };

  const openSubscribeConfirmation = () => {
    dispatch(ConfirmationActions.setConfirmationProvider(selectedProvider));
    dispatch(
      ConfirmationActions.setConfirmationType(
        confirmationConstants.SUBSCRIBE_CONFIRMATION
      )
    );
    dispatch(ConfirmationActions.openConfirmation());
  };

  useEffect(() => {
    getStates();
  }, []);

  useEffect(() => {
    if (!!selectedState) {
      getProviders();
    }
  }, [selectedState]);

  return (
    <div
      data-aos="flip-right"
      data-aos-duration="2000"
      className="get-consult box-white bg-white rounded-2xl shadow-md mt-40 overflow-hidden mb-24"
    >
      {loader && <Loader />}
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1">
        <div className="p-10 get-consult-form">
          <img src="/images/get-consult-logo.png" alt="" title="" />
          <h3 className="hepta-semibold font-40 mb-2 light-gray-dim mt-4">
            Find a Physician
          </h3>
          <p className="calibre-regular font-18 font-normal mb-10 light-gray-dim">
            Select your state for a list of participating Verbena providers.
          </p>
          <div className="form-input">
            <div className="flex mb-4">
              <select
                className="custom-select ca-width input-border-color border text-justify"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
              >
                <option value="">Select State</option>
                {states.map((state) => (
                  <option value={state.id} key={state.id}>
                    {state.state_name}
                  </option>
                ))}
              </select>
            </div>
            {selectedState && (
              <div className="flex mb-4">
                {!loader && providers.length === 0 ? (
                  "No providers found in selected state"
                ) : (
                  <select
                    className="custom-select ca-width input-border-color border text-justify"
                    value={selectedProvider}
                    onChange={(e) => setSelectedProvider(e.target.value)}
                  >
                    <option value="">Select Provider</option>
                    {providers.map((provider) => (
                      <option value={provider.id} key={provider.id}>
                        {`${provider.first_name} ${provider.last_name} (${provider.provider_speciality_master.name})`}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            )}
            <button
              type="submit"
              disabled={selectedProvider ? false : true}
              className="disabled:opacity-50 btn-login calibre-regular font-16 uppercase primary-bg-color text-white mr-3 tracking-widest"
              onClick={openProviderConfirmation}
            >
              Submit
            </button>
          </div>
        </div>
        <div>
          <div className="drop-message-box p-10 drop-msg-bg">
            <h5 className="uppercase hepta-semibold question-title-color mb-10 mt-16">
              have a question? Let us know.
            </h5>
            <div className="flex mb-10 xl:flex-nowrap lg:flex-wrap md:flex-wrap sm:flex-wrap flex-wrap">
              <div className="mr-4">
              <a href="mailto:info@verbenacare.com">
                <span className="msg-ico">
                  <i className="fas fa-envelope"></i>
                </span>
                </a>
              </div>
              <div>
                <a href="mailto:info@verbenacare.com" className="mont-font font-20 mont-bold">
                  info@verbenacare.com
                </a>
                <p className="mb-0 calibre-regular font-18 font-normal light-gray-dim">
                  Send us a message with any questions or feedback about
                  Verbena.
                </p>
              </div>
            </div>
          </div>

          <div className="newsletter-bg newletter-wrapper p-10">
            <h3 className="hepta-semibold font-40 mb-2 text-white">
              Newsletter
            </h3>
            <p className="mb-5 calibre-regular font-18 font-normal text-white">
              Register for our quarterly newsletter to receive Verbena product
              and provider updates, top women’s health news and Q&A with our
              Verbena medical advisers.
            </p>
            <div className="newsletter-form mb-10">
              <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-3">
                <div>
                  <input
                    type="text"
                    className="custom-input input-border-color border"
                    placeholder="Your Email"
                    name="email"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn-login calibre-regular font-16 uppercase primary-bg-color text-white mr-3 tracking-widest"
                    onClick={openSubscribeConfirmation}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Consultation;
