import { configureStore } from "@reduxjs/toolkit";
import ConfirmationReducer from "./slice/confirmation.slice";

const store = configureStore({
  reducer: {
    confirmation: ConfirmationReducer,
  },
});

export default store;
