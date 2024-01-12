import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const posts = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<string, string>({ query: () => "posts" }),
  }),
});
