import './App.css';
import Map from './map/Map';
import SearchPanel from './search_panel/SearchPanel';

function App() {

  const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
  }

  return (
    <>
      <SearchPanel />
      <Map location={location} defaultZoom={20} />
    </>
  );
}

export default App;
