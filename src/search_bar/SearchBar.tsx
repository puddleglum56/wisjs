import './SearchBar.css';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../hooks'
import { setSearchType, setSearch } from './SearchBarSlice'
import { SelectChangeEvent } from '@mui/material/Select';
import { useRef } from 'react';

function SearchBar() {
  const dispatch = useAppDispatch()
  const textFieldRef = useRef('')
  const searchType = useAppSelector((state) => state.searchBar.searchType)

  return (
  <>
  <FormControl className="search-select" sx={{minWidth: "30%"}}>
      <InputLabel>Search type</InputLabel>
      <Select
      value={searchType}
      label="Search type"
      size="small"
      onChange={(event: SelectChangeEvent) => dispatch(setSearchType(event.target.value as string))}
      >
        <MenuItem value="job-title">Job Title</MenuItem>
      </Select>
    </FormControl>
    <TextField onChange={(event) => textFieldRef.current = event.target.value } variant="outlined" size="small" className="search-input" sx={{backgroundColor: "white", minWidth: "40%"}}/>
    <Button onClick={() => dispatch(setSearch(textFieldRef.current))} variant="contained" className="search-button" sx={{marginLeft: "1vw", maxWidth: "5%"}}>Search</Button>
  </>
  );
}

export default SearchBar; 
