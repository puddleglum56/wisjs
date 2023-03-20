import { Stack } from '@mui/material';
import Footer from './footer/Footer';
import Map from './map/Map';
import MoreInfo from './more_info_drawer/MoreInfo';
import ResultsList from './results_list/ResultsList';
import SearchPanel from './search_panel/SearchPanel';

function App() {

  return (
    <Stack direction="column" height="100vh">
      <SearchPanel />
      <Stack direction="row" sx={{minWidth: "100%"}} flex={1}>
        <ResultsList />
        <Map />
        <MoreInfo />
      </Stack>
      <Footer />
    </Stack>
  );
}

export default App;
