import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { baseUrl } from "../config";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}/auth` }),
  endpoints: (builder) => ({
    signin: builder.mutation({
      qury: (body) => ({
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useSigninMutation } = authApi;
