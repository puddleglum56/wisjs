import './SearchBar.css';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

function handleChange() {};

function SearchBar() {
  const age : Number = 0;

  return (
  <>
  <FormControl className="search-select" sx={{minWidth: "20%"}}>
      <InputLabel>Search type</InputLabel>
      <Select
      value={age}
      label="Search type"
      size="small"
      onChange={handleChange}
      >
        <MenuItem value="field1">Field 1</MenuItem>
        <MenuItem value="field2">Field 2</MenuItem>
        <MenuItem value="field3">Field 3</MenuItem>
      </Select>
    </FormControl>
    <TextField variant="outlined" size="small" className="search-input" sx={{backgroundColor: "white", minWidth: "30%"}}/>
    <Button variant="contained" className="search-button" sx={{marginLeft: "1vh", maxWidth: "5%"}}>Search</Button>
  </>
  );
}

export default SearchBar; 
