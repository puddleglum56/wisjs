import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AdvancedOptionsState {
  agricultural: boolean;
  nonagricultural: boolean; 
  requiredExperience: number;
  hours: number;
}

// Define the initial state using that type
const initialState: AdvancedOptionsState = {
  agricultural: true,
  nonagricultural: true, 
  requiredExperience: 0,
  hours: 50
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
  },
})

export const { toggleAgricultural, toggleNonagricultural, setRequiredExperience, setHours } = advancedOptionsSlice.actions; 
export default advancedOptionsSlice.reducer