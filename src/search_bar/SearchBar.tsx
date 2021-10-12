import './SearchBar.css';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../hooks'
import { setSearchType, setSearch } from './SearchBarSlice'
import { SelectChangeEvent } from '@mui/material/Select';
import { useRef } from 'react';
import { SearchQueryArgs, useGetSeasonalJobsQuery } from '../searchApi';

function SearchBar() {

  const dispatch = useAppDispatch()

  // TODO: Now we gotta get the data out of the store and load it into the map :)
  function onSearchClick(searchQueryArgs : SearchQueryArgs) {
    const { data, error, isLoading } = useGetSeasonalJobsQuery(searchQueryArgs);
    dispatch(setSearch(searchQueryArgs.search));
  }

  const searchQueryArgs : SearchQueryArgs = {
    search : '',
    version : useAppSelector((state) => '2020-06-30'),
    searchType : useAppSelector((state) => state.searchBar.searchType),
    requiredExperience : useAppSelector((state) => state.advancedOptions.requiredExperience),
    includeAgricultural : useAppSelector((state) => state.advancedOptions.agricultural),
    includeNonagricultural : useAppSelector((state) => state.advancedOptions.nonagricultural),
    hours : useAppSelector((state) => state.advancedOptions.hours),
  }

  return (
  <>
  <FormControl className="search-select" sx={{minWidth: "30%"}}>
      <InputLabel>Search type</InputLabel>
      <Select
      value={searchQueryArgs.searchType}
      label="Search type"
      size="small"
      onChange={(event: SelectChangeEvent) => dispatch(setSearchType(event.target.value as string))}
      >
        <MenuItem value="job-title">Job Title</MenuItem>
      </Select>
    </FormControl>
    <TextField onChange={(event) => searchQueryArgs.search = event.target.value } variant="outlined" size="small" className="search-input" sx={{backgroundColor: "white", minWidth: "40%"}}/>
    <Button onClick={() => onSearchClick(searchQueryArgs)} variant="contained" className="search-button" sx={{marginLeft: "1vw", maxWidth: "5%"}}>Search</Button>
  </>
  );
}

export default SearchBar; 
