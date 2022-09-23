import { getDefaultMiddleware, Reducer } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../services/Auth.service";

const reducer = {
  [authApi.reducerPath]: authApi.reducer,
};

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
