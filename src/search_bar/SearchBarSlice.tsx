import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
interface SearchBarState{
  searchType: string;
}

// Define the initial state using that type
const initialState: SearchBarState = {
  searchType: 'job-title',
}

export const searchBarSlice = createSlice({
  name: 'searchType',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setSearchType: (state, action: PayloadAction<string>) => {
      state.searchType = action.payload
    },
  },
})

export const { setSearchType } = searchBarSlice.actions; 
export default searchBarSlice.reducer