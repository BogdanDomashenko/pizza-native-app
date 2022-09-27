import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchWithToken } from "./fetchWithToken";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchWithToken,
  endpoints: (build) => ({
    availableProducts: build.query({
      query: () => ({
        url: "/stock/aviablePizzas?page=0&&size=8&&category=0",
      }),
    }),
  }),
});

export const { useAvailableProductsQuery } = productApi;
