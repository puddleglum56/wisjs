import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type GeoPoint = {
  lat: number,
  lng: number
}

export type MapBounds = {
    ne: GeoPoint,
    nw: GeoPoint,
    se: GeoPoint,
    sw: GeoPoint
}

// Define a type for the slice state
interface MapState{
  bounds: MapBounds,
}

// Define the initial state using that type
const initialState: MapState = {
  bounds: {
    ne: {lat: 40.51367862028704, lng: -100.98148879287625},
    nw: {lat: 57.0406435823742, lng: -168.48148879287626},
    se: {lat: 18.64609491842107, lng: -33.48148879287626},
    sw: {lat: 18.64609491842107, lng: -168.48148879287626}
  }
}

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setMapBounds: (state, action: PayloadAction<MapBounds>) => {
      state.bounds = action.payload
    },
  },
})

export const { setMapBounds } = mapSlice.actions; 
export default mapSlice.reducer