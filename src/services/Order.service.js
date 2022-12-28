import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchWithToken } from "./fetchWithToken";

export const orderApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchWithToken,
  endpoints: (build) => ({
    orderList: build.query({
      query: (page) => ({
        url: `/order/list-by-user?page=${page}&size=8`,
      }),
    }),
  }),
});

export const { useOrderListQuery } = orderApi;
