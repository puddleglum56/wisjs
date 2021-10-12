import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Job } from './types/Job'

export type SearchQueryArgs = {
  version: string,
  search: string,
  searchType: string,
  includeAgricultural: boolean,
  includeNonagricultural: boolean,
  requiredExperience: number,
  hours: number
}

export const seasonalJobsSearchApi = createApi({
  reducerPath: 'seasonalJobsSearchApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://seasonaljobs.dol.gov/datahub/search'}),
  endpoints: (builder) => ({
    getSeasonalJobs: builder.query<Job[], SearchQueryArgs>({
      query: ({version, search, includeAgricultural, includeNonagricultural, requiredExperience, hours}: SearchQueryArgs) =>  ({
        url: `?api-version=${version}`,
        method: 'POST',
        body: {
          'search': `/.*${search}`,
          'searchFields': 'job_title, job_duties, soc_code_id, soc_title, case_number, naic_id, employer_business_name, employer_trade_name',
          'top': 100,
          'skip': 0,
          'queryType': 'simple',
          'searchMode': 'any',
          'count': true,
          'filter': 'active eq true and display eq true',
          'scoringProfile': 'test_profile',
          'facets': ['job_title, count:4, sort:count'],
          'orderby': 'search.score() desc',
        },
      }),
    }),
  }),
})

export const { useGetSeasonalJobsQuery } = seasonalJobsSearchApi
