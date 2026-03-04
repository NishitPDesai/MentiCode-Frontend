import { apiSlice } from '@/app/apiSlice';

export const playgroundApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPlaygrounds: builder.query({
      query: () => '/api/v1/analysis/playgrounds',
      providesTags: ['Playground'],
    }),
    createPlayground: builder.mutation({
      query: (body) => ({
        url: '/api/v1/analysis/playgrounds',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Playground'],
    }),
  }),
});

export const { useGetPlaygroundsQuery, useCreatePlaygroundMutation } =
  playgroundApi;
