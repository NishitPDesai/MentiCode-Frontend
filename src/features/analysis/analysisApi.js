import { apiSlice } from '@/app/apiSlice';

export const analysisApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    startAnalysis: builder.mutation({
      query: ({ playgroundId, fileId }) => ({
        url: `/api/v1/analysis/playgrounds/${playgroundId}/files/${fileId}/analyze`,
        method: 'POST',
      }),
    }),
    getJobResult: builder.query({
      query: (jobId) => `/api/v1/analysis/jobs/${jobId}/result`,
      providesTags: ['Job'],
    }),
  }),
});

export const { useStartAnalysisMutation, useGetJobResultQuery } = analysisApi;
