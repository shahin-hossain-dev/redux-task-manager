import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    //query return an object
    getPosts: builder.query({
      query: () => "/posts",
    }),
    getPostById: builder.query({
      query: (id) => `/posts/${id}`,
    }),
    //mutation return an array
    setPost: builder.mutation({
      query: (post) => ({
        url: "/posts",
        method: "POST",
        body: post,
      }),
    }),
  }),
});

export const { useGetPostsQuery, useGetPostByIdQuery, useSetPostMutation } =
  baseApi;
