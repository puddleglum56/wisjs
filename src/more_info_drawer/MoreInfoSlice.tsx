import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
interface MoreInfoState{
  open: boolean;
}

// Define the initial state using that type
const initialState: MoreInfoState = {
  open: true
}

export const moreInfoSlice = createSlice({
  name: 'moreInfo',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setDrawerOpen: (state) => {
      state.open = true
    },
    setDrawerClose: (state) => {
      state.open = false
    },
  },
})

export const { setDrawerClose, setDrawerOpen } = moreInfoSlice.actions; 
export default moreInfoSlice.reducer