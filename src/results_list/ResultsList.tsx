import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import { useAppDispatch, useAppSelector } from '../hooks';
import { selectJob, setMapCenter } from '../map/MapSlice';
import { SearchQueryArgs, useGetSeasonalJobsQuery } from '../searchApi';
import { Job } from '../types/Job';
import { GeoPoint } from '../map/MapSlice';

function RenderRow(props: ListChildComponentProps) {
  const { index, style, data } = props;
  const job : Job = data[index]
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(selectJob(job))
    dispatch(setMapCenter({lng: job.coord.coordinates[0], lat: job.coord.coordinates[1]} as GeoPoint))
  }

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton onClick={() => handleClick()}>
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

  const listWidth = "20vw"

  return (
    <Box
      sx={{ width: listWidth, height: '82vh', bgcolor: 'background.paper' }}
    >
      {searchQuery.data ? (
        <FixedSizeList
          height={593}
          width={listWidth}
          itemSize={110}
          itemCount={searchQuery.data.value.length}
          overscanCount={5}
          itemData={searchQuery.data.value}
        >
          {RenderRow}
        </FixedSizeList>
      ) : null }
    </Box>
  );
}