const obj = {
  //Confirmation Reducer
  confirmationStatus: (state) => state.confirmation.status,
  confirmationType: (state) => state.confirmation.type,
  confirmationProvider: (state) => state.confirmation.provider,
  confirmationEmail: (state) => state.confirmation.email,
};

export default obj;
