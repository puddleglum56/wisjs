import './SearchBar.css';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

function handleChange() {};

function SearchBar() {
  const age : Number = 0;

  return (
  <>
  <FormControl className="search-select" sx={{minWidth: "30%"}}>
      <InputLabel>Search type</InputLabel>
      <Select
      value={age}
      label="Search type"
      size="small"
      onChange={handleChange}
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
