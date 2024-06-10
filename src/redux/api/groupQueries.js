import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "../axiosBaseQuery";

export const groupApiService = createApi({
  reducerPath: "groupApiService",
  baseQuery: axiosBaseQuery(),
  tagTypes: ['groups'],
  endpoints: (builder) => ({
    getAllGroups: builder.query({
      query: () => ({
        url: "/groups",
        method: "get",
      }),
      providesTags: ["groups"], // provide unique name in which this unique key is used for invalidation
    }),
  }),
});

export const { useGetAllGroupsQuery } = groupApiService;