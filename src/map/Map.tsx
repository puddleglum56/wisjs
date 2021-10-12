import { skipToken } from '@reduxjs/toolkit/dist/query';
import GoogleMapReact from 'google-map-react'
import { useAppSelector } from '../hooks';
import { useGetKeysQuery } from '../keysApi';
import { SearchQueryArgs, useGetSeasonalJobsQuery } from '../searchApi';
import './Map.css'
import Pin from './Pin';

type Location = {
  address: string,
  lat: number,
  lng: number
}

type MapProps = {
  location: Location,
  defaultZoom: number
}


export default function Map({location, defaultZoom}: MapProps) {
  const keyQuery = useGetKeysQuery()

  const searchQueryArgs : SearchQueryArgs = {
    search : useAppSelector((state) => state.searchBar.search),
    version : '2020-06-30',
    searchType : useAppSelector((state) => state.searchBar.searchType),
    requiredExperience : useAppSelector((state) => state.advancedOptions.requiredExperience),
    includeAgricultural : useAppSelector((state) => state.advancedOptions.agricultural),
    includeNonagricultural : useAppSelector((state) => state.advancedOptions.nonagricultural),
    hours : useAppSelector((state) => state.advancedOptions.hours),
  }

  // TODO: Now we gotta get the data out of the store and load it into the map :)
  const searchQuery = useGetSeasonalJobsQuery(searchQueryArgs.search ? searchQueryArgs : skipToken);

  return (
    <div className="map">
        <div className="google-map">
          {keyQuery.error ? (
            <>Oh no, there was an error</>
          ) : keyQuery.isLoading ? (
            <>Loading...</>
          ) : keyQuery.data ? (
            <>
              <GoogleMapReact
                bootstrapURLKeys={{ key: keyQuery.data.googleMapsAPI}}
                defaultCenter={location}
                defaultZoom={defaultZoom}
              >
                {searchQuery.data ? (
                  <Pin
                    lat={location.lat}
                    lng={location.lng}
                    text={location.address}
                  />
                ) : null }
              </GoogleMapReact>
            </>
          ) : null}
        </div>
    </div>
  );
}