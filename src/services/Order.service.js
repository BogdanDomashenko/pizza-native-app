import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchWithToken } from "./fetchWithToken";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchWithToken,
  endpoints: (build) => ({
    orderList: build.query({
      query: (page) => ({
        url: `/order/list-by-user?page=${page}&size=8`,
      }),
    }),
    phantomCheckout: build.mutation({
      query: ({ orderList, shippingData }) => ({
        method: "POST",
        url: "/order/phantom-checkout",
        body: { orderList, shippingData },
      }),
    }),
  }),
});

export const { useOrderListQuery, usePhantomCheckoutMutation } = orderApi;
