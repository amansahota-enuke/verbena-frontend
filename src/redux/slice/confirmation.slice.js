import { createSlice } from "@reduxjs/toolkit";

const ConfirmationSlice = createSlice({
  name: "confirmation",
  initialState: {
    status: false,
    type: "",
    provider: "",
    email: "",
  },
  reducers: {
    openConfirmation: (state) => {
      state.status = true;
    },
    closeConfirmation: (state) => {
      state.status = false;
    },
    setConfirmationType: (state, action) => {
      state.type = action.payload;
    },
    setConfirmationProvider: (state, action) => {
      state.provider = action.payload;
    },
    setEmailConfirmation: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const ConfirmationActions = ConfirmationSlice.actions;

export default ConfirmationSlice.reducer;
