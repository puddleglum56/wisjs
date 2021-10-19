import { Stack } from '@mui/material';
import './App.css';
import Map from './map/Map';
import MoreInfo from './more_info_drawer/MoreInfo';
import ResultsList from './results_list/ResultsList';
import SearchPanel from './search_panel/SearchPanel';

function App() {

  return (
    <>
      <SearchPanel />
      <Stack direction="row" sx={{minWidth: "100%"}}>
        <ResultsList />
        <Map />
        <MoreInfo />
      </Stack>
    </>
  );
}

export default App;
