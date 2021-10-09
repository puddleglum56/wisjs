import './SearchPanel.css';
import SearchBar from '../search_bar/SearchBar';
import BasicMenu from '../advanced_options_menu/AdvancedOptionsMenu';

function SearchPanel() {
  return (
    <div className="search-panel">
      <SearchBar />
      <BasicMenu />
    </div>
  );
}

export default SearchPanel; 
