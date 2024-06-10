import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "../axiosBaseQuery";

export const authApiService = createApi({
  reducerPath: "authApiService",
  baseQuery: axiosBaseQuery(),
  tagTypes: ['auth'],
  endpoints: (builder) => ({
    login: builder.mutation({
        query: (formData) => ({
          url: "/login",
          method: "post",
          data: formData,
        }),
        invalidatesTags:["auth"],
      }),
  }),
});

export const { useLoginMutation } = authApiService;