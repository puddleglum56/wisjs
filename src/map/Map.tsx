import GoogleMapReact from 'google-map-react'
import { useGetKeysQuery } from '../keysApi';
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
  const { data, error, isLoading } = useGetKeysQuery()

  return (
    <div className="map">
        <div className="google-map">
          {error ? (
            <>Oh no, there was an error</>
          ) : isLoading ? (
            <>Loading...</>
          ) : data ? (
            <>
              <GoogleMapReact
                bootstrapURLKeys={{ key: data.googleMapsAPI}}
                defaultCenter={location}
                defaultZoom={defaultZoom}
              >
                <Pin
                  lat={location.lat}
                  lng={location.lng}
                  text={location.address}
                />
              </GoogleMapReact>
            </>
          ) : null}
        </div>
    </div>
  );
}