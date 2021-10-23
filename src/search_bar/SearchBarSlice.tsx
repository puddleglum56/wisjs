import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface SearchBarState{
  searchType: string[];
  search: string;
}

// Define the initial state using that type
const initialState: SearchBarState = {
  searchType: ["job_title","soc_title","employer_business_name","employer_trade_name","job_duties"],
  search: '',
}

export const searchBarSlice = createSlice({
  name: 'searchType',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setSearchType: (state, action: PayloadAction<string[]>) => {
      state.searchType = action.payload
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
  },
})

export const { setSearchType, setSearch } = searchBarSlice.actions; 
export default searchBarSlice.reducer