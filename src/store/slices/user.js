import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../../services/Auth.service";
import { ROLES } from "../../utils/constants";

const initialState = {
  role: ROLES.phantom,
  data: {
    id: null,
    phoneNumber: null,
  },
  shippingData: {
    email: "",
    firstName: "",
    lastName: "",
    city: "",
    postCode: "",
    address: "",
    phone: "",
    paymentMethod: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.signin.matchFulfilled,
      (state, { payload }) => {
        state.role = payload.role;
        state.data = { id: payload.id, phoneNumber: payload.phoneNumber };
      }
    );
    builder.addMatcher(
      authApi.endpoints.signUp.matchFulfilled,
      (state, { payload }) => {
        state.role = payload.role;
        state.data = { id: payload.id, phoneNumber: payload.phoneNumber };
      }
    );
  },
  reducers: {
    resetUser: () => initialState,
    setShippingData: (state, action) => {
      state.shippingData = action.payload;
    },
    resetShippingData: (state, action) => {
      state.shippingData = initialState.shippingData;
    },
  },
});

export const { resetUser, setShippingData, resetShippingData } =
  userSlice.actions;
export const userReducer = userSlice.reducer;
