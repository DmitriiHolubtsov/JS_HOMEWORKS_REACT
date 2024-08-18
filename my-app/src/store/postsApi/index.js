import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '../../utils/API_CONFIG';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL
  }),

  endpoints: (build) => ({
    getPosts: build.query({
      query: (limit) => `posts?_limit=${limit}`
    }),

    getPostById: build.query({
      query: (postId = 1) => `posts/${postId}`
    }),

    createPost: build.mutation({
      query: (body) => ({
        url: 'posts',
        method: 'POST',
        body
      })
    }),

    updatePost: build.mutation({
      query: ({ id, ...patch }) => ({
        url: `/posts/${id}`,
        method: 'PATCH',
        body: patch
      })
    }),

    deletePost: build.mutation({
      query: (postId) => ({
        url: `/posts/${postId}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['PostsList']
    })
  }),
  overrideExisting: true
});
export const {
  useGetPostsQuery,
  useGetPostByIdQuery,
  useLazyGetPostByIdQuery,
  useUpdatePostMutation,
  useCreatePostMutation,
  useDeletePostMutation
} = postsApi;
