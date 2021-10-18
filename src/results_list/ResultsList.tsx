import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import { useAppSelector } from '../hooks';
import { SearchQueryArgs, useGetSeasonalJobsQuery } from '../searchApi';
import { Job } from '../types/Job';

function renderRow(props: ListChildComponentProps) {
  const { index, style, data } = props;
  const job : Job = data[index]

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={job.job_title} />
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
      sx={{ width: '30vw', height: '82vh', bgcolor: 'background.paper' }}
    >
      {searchQuery.data ? (
        <FixedSizeList
          height={593}
          width="30vw"
          itemSize={110}
          itemCount={searchQuery.data.value.length}
          overscanCount={5}
          itemData={searchQuery.data.value}
        >
          {renderRow}
        </FixedSizeList>
      ) : null }
    </Box>
  );
}