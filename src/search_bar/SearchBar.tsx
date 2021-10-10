import './SearchBar.css';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../hooks'
import { setSearchType } from './SearchBarSlice'
import { SelectChangeEvent } from '@mui/material/Select';

function SearchBar() {

  const dispatch = useAppDispatch()
  const searchType : string = useAppSelector((state) => state.searchBar.searchType);

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
    <TextField variant="outlined" size="small" className="search-input" sx={{backgroundColor: "white", minWidth: "40%"}}/>
    <Button variant="contained" className="search-button" sx={{marginLeft: "1vw", maxWidth: "5%"}}>Search</Button>
  </>
  );
}

export default SearchBar; 
