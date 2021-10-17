import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import { useAppSelector } from '../hooks';
import { SearchQueryArgs, useGetSeasonalJobsQuery } from '../searchApi';

function renderRow(props: ListChildComponentProps) {
  const { index, style } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`Item ${index + 1}`} />
      </ListItemButton>
    </ListItem>
  );
}

export default function ResultsList() {

  const searchQueryArgs : SearchQueryArgs = {
    search : useAppSelector((state) => state.searchBar.search),
    version : '2020-06-30',
    searchType : useAppSelector((state) => state.searchBar.searchType),
    requiredExperience : useAppSelector((state) => state.advancedOptions.requiredExperience),
    includeAgricultural : useAppSelector((state) => state.advancedOptions.agricultural),
    includeNonagricultural : useAppSelector((state) => state.advancedOptions.nonagricultural),
    hours : useAppSelector((state) => state.advancedOptions.hours),
    mapBounds : useAppSelector((state) => state.map.bounds)
  }

  const searchQuery = useGetSeasonalJobsQuery(searchQueryArgs.search ? searchQueryArgs : skipToken);

  return (
    <Box
      sx={{ width: '25vw', height: '82vh', bgcolor: 'background.paper' }}
    >
      <FixedSizeList
        height={593}
        width="35vw"
        itemSize={110}
        itemCount={200}
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
  );
}