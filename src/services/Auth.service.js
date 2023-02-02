import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../config";
import { setAccessToken } from "./AsyncStorage.service";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}/auth` }),
  endpoints: (build) => ({
    signUp: build.mutation({
      query: (body) => ({
        method: "POST",
        url: "/signup",
        body,
      }),
      transformResponse: (response, meta) => {
        setAccessToken(meta.response.headers.map.authorization);
        return response;
      },
    }),
    signin: build.mutation({
      query: (body) => ({
        method: "POST",
        url: "/signin",
        body,
      }),
      transformResponse: (response, meta) => {
        setAccessToken(meta.response.headers.map.authorization);
        return response;
      },
    }),
  }),
});

export const { useSigninMutation, useSignUpMutation } = authApi;
