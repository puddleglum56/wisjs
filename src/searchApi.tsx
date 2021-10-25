import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GeoPoint } from './map/MapSlice'
import { SeasonalJobSearchResponse } from './types/Job'

export type SearchQueryArgs = {
  version: string,
  search: string,
  searchType: string[],
  includeAgricultural: boolean,
  includeNonagricultural: boolean,
  requiredExperience: number,
  hours: number,
  searchAll: boolean,
  boundingLocation: GeoPoint[],
  locationAll: boolean,
  minimumWage: number,
}

export const seasonalJobsSearchApi = createApi({
  reducerPath: 'seasonalJobsSearchApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://morning-tor-41184.herokuapp.com/https://seasonaljobs.dol.gov/datahub/search',
  }),
  endpoints: (builder) => ({
    getSeasonalJobs: builder.query<SeasonalJobSearchResponse, SearchQueryArgs>({
      query: (args: SearchQueryArgs) =>  ({
        url: `?api-version=${args.version}`,
        method: 'POST',
        body: {
          'search': args.searchAll ? '*' : `/.*${args.search}~.*/`,
          'searchFields': args.searchType.join(', '),
          'top': 3000,
          'skip': 0,
          'queryType': 'simple',
          'searchMode': 'any',
          'count': true,
          'filter': (
            `active eq true and display eq true and ${args.locationAll ? '' : `geo.intersects(coord, geography'POLYGON((${args.boundingLocation[0].lng} ${args.boundingLocation[0].lat}, ${args.boundingLocation[1].lng} ${args.boundingLocation[1].lat}, ${args.boundingLocation[2].lng} ${args.boundingLocation[2].lat}, ${args.boundingLocation[3].lng} ${args.boundingLocation[3].lat}, ${args.boundingLocation[0].lng} ${args.boundingLocation[0].lat}))') and `}basic_rate_from ge ${args.minimumWage} and work_hour_num_basic le ${args.hours} and emp_exp_num_months le ${args.requiredExperience} ${!args.includeAgricultural ? "and visa_class eq 'H-2B'" : ''}${(!args.includeNonagricultural) ? "and visa_class eq 'H-2A'" : ''}`),
          'scoringProfile': 'test_profile',
          'facets': ['job_title, count:4, sort:count'],
          'orderby': 'search.score() desc',
        },
      }),
    }),
  }),
})

export const { useGetSeasonalJobsQuery } = seasonalJobsSearchApi
