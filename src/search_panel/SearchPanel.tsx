import './SearchPanel.css';
import SearchBar from '../search_bar/SearchBar';
import BasicMenu from '../advanced_options_menu/AdvancedOptionsMenu';
import { CircularProgress } from '@mui/material';
import { SearchQueryArgs, useGetSeasonalJobsQuery } from '../searchApi';
import { useAppSelector } from '../hooks';
import { skipToken } from '@reduxjs/toolkit/dist/query';

function SearchPanel() {

  const searchQueryArgs : SearchQueryArgs = {
    search : useAppSelector((state) => state.searchBar.search),
    version : '2020-06-30',
    searchType : useAppSelector((state) => state.searchBar.searchType),
    requiredExperience : useAppSelector((state) => state.advancedOptions.requiredExperience),
    includeAgricultural : useAppSelector((state) => state.advancedOptions.agricultural),
    includeNonagricultural : useAppSelector((state) => state.advancedOptions.nonagricultural),
    hours : useAppSelector((state) => state.advancedOptions.hours),
  }

  const searchQuery = useGetSeasonalJobsQuery(searchQueryArgs.search ? searchQueryArgs : skipToken);

  return (
    <div className="search-panel">
      <SearchBar />
      <BasicMenu />
      { searchQuery.isFetching ?
      <CircularProgress sx={{marginLeft: "5vw"}} />
      :
      null }
    </div>
  );
}

export default SearchPanel; 
