import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchWithToken } from "./fetchWithToken";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchWithToken,
  endpoints: (build) => ({
    availableProducts: build.query({
      query: ({ page, activeCategory }) => ({
        url: `/stock/available?page=${page}&&size=8&&category=${activeCategory}`,
      }),
    }),
    categories: build.query({
      query: () => ({
        url: `/category/list`,
      }),
    }),
  }),
});

export const { useAvailableProductsQuery, useCategoriesQuery } = productApi;
