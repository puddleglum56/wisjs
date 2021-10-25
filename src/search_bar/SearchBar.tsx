import './SearchBar.css';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../hooks'
import { setSearchType, setSearch, setSearchAll } from './SearchBarSlice'
import { SelectChangeEvent } from '@mui/material/Select';
import { ChangeEvent, useEffect, useState } from 'react';

function SearchBar() {
  const dispatch = useAppDispatch()
  const searchType = useAppSelector((state) => state.searchBar.searchType)

  const [searchValue, setSearchValue] = useState("");

  const stopTypingTimeout : number = 500;

  const handleOnChange = (event : ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setSearchValue(event.target.value)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchValue === "*") {
        dispatch(setSearchAll(true))
        dispatch(setSearch("*"))
      } else {
        dispatch(setSearchAll(false))
        dispatch(setSearch(searchValue))
      }
    }, stopTypingTimeout);
    return () => clearTimeout(timeoutId);
  }, [searchValue]);

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
    <TextField 
      placeholder='Try a job name or "*" to search everything...'
      onChange={(event) => handleOnChange(event)}
      variant="outlined" size="small"
      className="search-input"
      sx={{backgroundColor: "white", minWidth: "40%"}}
      />
  </>
  );
}

export default SearchBar; 
