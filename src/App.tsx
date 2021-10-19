import { Stack } from '@mui/material';
import './App.css';
import { useAppSelector } from './hooks';
import Map from './map/Map';
import MoreInfo from './more_info_drawer/MoreInfo';
import ResultsList from './results_list/ResultsList';
import SearchPanel from './search_panel/SearchPanel';

function App() {
  const center = useAppSelector((state) => state.map.center)
  const zoom = useAppSelector((state) => state.map.zoom)

  return (
    <>
      <SearchPanel />
      <Stack direction="row" sx={{minWidth: "100%", flexShrink: 1}}>
        <ResultsList />
        <Map center={center} defaultZoom={zoom} />
        <MoreInfo />
      </Stack>
    </>
  );
}

export default App;
