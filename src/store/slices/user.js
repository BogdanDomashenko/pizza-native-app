import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../../services/Auth.service";
import { ROLES } from "../../utils/constants";

const initialState = {
  role: ROLES.phantom,
  data: {
    id: null,
    phoneNumber: null,
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
  },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
