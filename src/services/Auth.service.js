import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../config";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}/auth` }),
  endpoints: (build) => ({
    test: build.query({
      mathod: "GET",
      url: "/test",
    }),
    signin: build.mutation({
      query: (body) => ({
        method: "POST",
        url: "/signin",
        body,
      }),
    }),
  }),
});

export const { useSigninMutation } = authApi;
