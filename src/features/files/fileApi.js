import { apiSlice } from '@/app/apiSlice';

export const fileApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFiles: builder.query({
      query: (playgroundId) =>
        `/api/v1/analysis/playgrounds/${playgroundId}/files`,
      providesTags: ['File'],
    }),
  }),
});

export const { useGetFilesQuery } = fileApi;
