import { Button } from '@mui/material';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import GoogleMapReact from 'google-map-react'
import { useAppDispatch, useAppSelector } from '../hooks';
import { SearchQueryArgs, useGetSeasonalJobsQuery } from '../searchApi';
import { Job } from '../types/Job';
import './Map.css'
import { setMapZoom, setMapBounds, resetMap } from './MapSlice';
import Pin from './Pin';

export default function Map() {
  const dispatch = useAppDispatch()

  const center = useAppSelector((state) => state.map.center)
  const zoom = useAppSelector((state) => state.map.zoom)

  const searchQueryArgs : SearchQueryArgs = {
    search : useAppSelector((state) => state.searchBar.search),
    version : '2020-06-30',
    searchType : useAppSelector((state) => state.searchBar.searchType),
    requiredExperience : useAppSelector((state) => state.advancedOptions.requiredExperience),
    includeAgricultural : useAppSelector((state) => state.advancedOptions.agricultural),
    includeNonagricultural : useAppSelector((state) => state.advancedOptions.nonagricultural),
    hours : useAppSelector((state) => state.advancedOptions.hours),
  }

  const drawerOpen = useAppSelector((state) => state.moreInfo.open)

  const searchQuery = useGetSeasonalJobsQuery(searchQueryArgs.search ? searchQueryArgs : skipToken);

  const onMapChange = (event: GoogleMapReact.ChangeEventValue) => {
    dispatch(setMapZoom(event.zoom))
    dispatch(setMapBounds(event.bounds))
  }

  return (
    <div className="map">
      <div className="google-map" style={{width: drawerOpen ? "40vw" : "80vw"}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyA-3X7TKl4j6TA0jrbvrDhTg4MiqUZbs7w'}}
          //bootstrapURLKeys={{ key: keyQuery.data.googleMapsAPI}}
          center={center}
          zoom={zoom}
          onChange={(event: GoogleMapReact.ChangeEventValue) => onMapChange(event)}>
          {searchQuery.data ? (
            searchQuery.data.value.flatMap((job : Job) => job.coord ?
              [<Pin key={job.case_id} lat={job.coord.coordinates[1]} lng={job.coord.coordinates[0]} job={job} />] : 
              []
            )
          ) : null }
        </GoogleMapReact>
        <Button sx={{marginTop: "-10vh", marginLeft: "5vw"}} variant="contained" onClick={() => dispatch(resetMap())}>Reset Map</Button>
      </div>
    </div>
  );
}