import { Stack } from '@mui/material';
import './App.css';
import { useAppSelector } from './hooks';
import Map from './map/Map';
import ResultsList from './results_list/ResultsList';
import SearchPanel from './search_panel/SearchPanel';

function App() {
  const center = useAppSelector((state) => state.map.center)
  const zoom = useAppSelector((state) => state.map.zoom)

  return (
    <>
      <SearchPanel />
      <Stack direction="row">
        <ResultsList />
        <Map center={center} defaultZoom={zoom} />
      </Stack>
    </>
  );
}

export default App;
