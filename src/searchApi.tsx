import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { MapBounds } from './map/MapSlice'
import { Job, SeasonalJobSearchResponse } from './types/Job'

export type SearchQueryArgs = {
  version: string,
  search: string,
  searchType: string[],
  includeAgricultural: boolean,
  includeNonagricultural: boolean,
  requiredExperience: number,
  hours: number,
  mapBounds: MapBounds
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
          'search': `/.*${args.search}~.*/`,
          'searchFields': args.searchType.join(', '),
          'top': 100,
          'skip': 0,
          'queryType': 'simple',
          'searchMode': 'any',
          'count': true,
          'filter': (
            `active eq true and display eq true and geo.intersects(coord, geography'POLYGON((${args.mapBounds.nw.lng} ${args.mapBounds.nw.lat}, ${args.mapBounds.sw.lng} ${args.mapBounds.sw.lat}, ${args.mapBounds.se.lng} ${args.mapBounds.se.lat}, ${args.mapBounds.ne.lng} ${args.mapBounds.ne.lat}, ${args.mapBounds.nw.lng} ${args.mapBounds.nw.lat}))')`),
          'scoringProfile': 'test_profile',
          'facets': ['job_title, count:4, sort:count'],
          'orderby': 'search.score() desc',
        },
      }),
    }),
  }),
})

export const { useGetSeasonalJobsQuery } = seasonalJobsSearchApi
