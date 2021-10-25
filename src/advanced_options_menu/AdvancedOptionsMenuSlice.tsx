import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GeoPoint } from '../map/MapSlice'

interface AdvancedOptionsState {
  agricultural: boolean;
  nonagricultural: boolean; 
  requiredExperience: number;
  hours: number;
  location: string;
  boundingLocation: GeoPoint[];
  locationAll: boolean;
  minimumWage: number;
}

// Define the initial state using that type
const initialState: AdvancedOptionsState = {
  agricultural: true,
  nonagricultural: true, 
  requiredExperience: 0,
  hours: 50,
  location: '*',
  boundingLocation: [] as GeoPoint[],
  locationAll: true,
  minimumWage: 0
}

export const advancedOptionsSlice = createSlice({
  name: 'advancedOptions',
  initialState,
  reducers: {
    toggleAgricultural: (state) => {
      state.agricultural = !state.agricultural
    },
    toggleNonagricultural: (state) => { 
      state.nonagricultural = !state.nonagricultural
    },
    setRequiredExperience: (state, action: PayloadAction<number>) => {
      state.requiredExperience = action.payload
    },
    setHours: (state, action: PayloadAction<number>) => {
      state.hours = action.payload
    },
    setBoundingLocation: (state, action: PayloadAction<GeoPoint[]>) => {
      state.boundingLocation = action.payload
    },
    setLocationAll: (state, action: PayloadAction<boolean>) => {
      state.locationAll = action.payload
    },
    setMinimumWage: (state, action: PayloadAction<number>) => {
      state.minimumWage = action.payload
    },
    setLocation(state, action: PayloadAction<string>) {
      state.location = action.payload
    }
  },
})

export const { toggleAgricultural, toggleNonagricultural, setRequiredExperience, setHours, setBoundingLocation, setLocationAll, setMinimumWage, setLocation } = advancedOptionsSlice.actions; 
export default advancedOptionsSlice.reducer