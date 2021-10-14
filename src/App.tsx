import './App.css';
import Map from './map/Map';
import SearchPanel from './search_panel/SearchPanel';

function App() {

  const center = {
    lat: 40.51367862028704,
    lng: -100.98148879287625
  }

  return (
    <>
      <SearchPanel />
      <Map center={center} defaultZoom={4} />
    </>
  );
}

export default App;
