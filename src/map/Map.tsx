import { skipToken } from '@reduxjs/toolkit/dist/query';
import GoogleMapReact from 'google-map-react'
import { useAppDispatch, useAppSelector } from '../hooks';
import { SearchQueryArgs, useGetSeasonalJobsQuery } from '../searchApi';
import { Job } from '../types/Job';
import './Map.css'
import { setMapBounds } from './MapSlice';
import Pin from './Pin';

type Location = {
  lat: number,
  lng: number
}

type MapProps = {
  center: Location,
  defaultZoom: number
}


export default function Map(mapProps: MapProps) {
  const dispatch = useAppDispatch()

  const searchQueryArgs : SearchQueryArgs = {
    search : useAppSelector((state) => state.searchBar.search),
    version : '2020-06-30',
    searchType : useAppSelector((state) => state.searchBar.searchType),
    requiredExperience : useAppSelector((state) => state.advancedOptions.requiredExperience),
    includeAgricultural : useAppSelector((state) => state.advancedOptions.agricultural),
    includeNonagricultural : useAppSelector((state) => state.advancedOptions.nonagricultural),
    hours : useAppSelector((state) => state.advancedOptions.hours),
    mapBounds : useAppSelector((state) => state.map.bounds)
  }

  // TODO: Now we gotta get the data out of the store and load it into the map :)
  const searchQuery = useGetSeasonalJobsQuery(searchQueryArgs.search ? searchQueryArgs : skipToken);

  return (
    <div className="map">
        <div className="google-map">
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyA-3X7TKl4j6TA0jrbvrDhTg4MiqUZbs7w'}}
            //bootstrapURLKeys={{ key: keyQuery.data.googleMapsAPI}}
            defaultCenter={mapProps.center}
            defaultZoom={mapProps.defaultZoom}
            onChange={(event: GoogleMapReact.ChangeEventValue) => dispatch(setMapBounds(event.bounds))}>
            {searchQuery.data ? (
              searchQuery.data.value.flatMap((job : Job) => job.coord ?
                [<Pin key={job.case_id} lat={job.coord.coordinates[1]} lng={job.coord.coordinates[0]} job={job} />] : 
                []
              )
            ) : null }
          </GoogleMapReact>
        </div>
    </div>
  );
}