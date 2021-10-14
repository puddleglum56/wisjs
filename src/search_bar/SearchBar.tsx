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
  <FormControl className="search-select" sx={{minWidth: "30%", maxWidth: "30%"}}>
      <InputLabel>Search type</InputLabel>
      <Select
      multiple
      // @ts-ignore: Unreachable code error
      value={searchType}
      label="Search type"
      size="small"
      // @ts-ignore: Unreachable code error
      onChange={(event: SelectChangeEvent) => dispatch(setSearchType(event.target.value))}
      >
        <MenuItem value="job_title">Job Title</MenuItem>
        <MenuItem value="soc_title">Standard Occupational Classification Title</MenuItem>
        <MenuItem value="employer_business_name">Employer Business Name</MenuItem>
        <MenuItem value="employer_trade_name">Employer Trade Name</MenuItem>
        <MenuItem value="job_duties">Job Duties</MenuItem>
        <MenuItem value="soc_code_id">Job ID</MenuItem>
        <MenuItem value="case_number">Case Number</MenuItem>
      </Select>
    </FormControl>
    <TextField onChange={(event) => textFieldRef.current = event.target.value } variant="outlined" size="small" className="search-input" sx={{backgroundColor: "white", minWidth: "40%"}}/>
    <Button onClick={() => dispatch(setSearch(textFieldRef.current))} variant="contained" className="search-button" sx={{marginLeft: "1vw", maxWidth: "5%"}}>Search</Button>
  </>
  );
}

export default SearchBar; 
