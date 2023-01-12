import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../config";
import { resetUser } from "../store/slices/user";
import {
  removeAccessToken,
  setAccessToken,
  getAccessToken,
} from "./AsyncStorage.service";

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: async (headers) => {
    const accessToken = await getAccessToken();

    if (accessToken) {
      headers.set("authorization", accessToken);
    }

    return headers;
  },
});

export const fetchWithToken = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error) {
    const { status } = result.error;

    if (status === 400 || status === 411 || status === 409 || status === 403) {
      const refreshResult = await baseQuery("token/refresh", api, extraOptions);

      if (refreshResult.data) {
        await setAccessToken(refreshResult.headers.authorization);
        result = await baseQuery(args, api, extraOptions);
      } else {
        await removeAccessToken();
        api.dispatch(resetUser());
      }
    }
  }

  return result;
};
