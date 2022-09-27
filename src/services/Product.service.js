import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchWithToken } from "./fetchWithToken";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchWithToken,
  endpoints: (build) => ({
    availableProducts: build.query({
      query: (page) => ({
        url: `/stock/aviablePizzas?page=${page}&&size=8&&category=0`,
      }),
    }),
  }),
});

export const { useAvailableProductsQuery } = productApi;
