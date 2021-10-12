import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Keys = {
    googleMapsAPI: string
}


// Define a service using a base URL and expected endpoints
export const keysApi = createApi({
  reducerPath: 'keysApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://puddleglum56.github.io/wemapi/' }),
  endpoints: (builder) => ({
    getKeys: builder.query<Keys, void>({
      query: () => `keys.json`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetKeysQuery } = keysApi