import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import { useAppDispatch, useAppSelector } from '../hooks';
import { selectJob, setMapCenter, setMapZoom } from '../map/MapSlice';
import { SearchQueryArgs, useGetSeasonalJobsQuery } from '../searchApi';
import { Job } from '../types/Job';
import { GeoPoint } from '../map/MapSlice';
import { setDrawerOpen } from '../more_info_drawer/MoreInfoSlice';
import { capitalize } from '../utility';
import { Stack, Typography } from '@mui/material';

function RenderRow(props: ListChildComponentProps) {
  const { index, style, data } = props;
  const job : Job = data[index]
  const dispatch = useAppDispatch()

  const selectedJob = useAppSelector(state => state.map.selectedJob)

  const handleClick = () => {
    dispatch(selectJob(job))
    dispatch(setMapCenter({lng: job.coord.coordinates[0], lat: job.coord.coordinates[1]} as GeoPoint))
    dispatch(setMapZoom(7))
    dispatch(setDrawerOpen())
  }

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton onClick={() => handleClick()} sx={{width: "100%", height: "100%", borderBottom: "#C4C4C4 solid 1px", background: (selectedJob == job) ? "#ECF0F3" : "inherit"}}>
        <Stack direction="column">
          <Typography sx={{fontSize: "0.8rem", fontWeight: "bold"}}>{capitalize(job.job_title)}</Typography>
          <Typography sx={{fontSize: "0.8rem"}}>{capitalize(job.worksite_city+', '+job.worksite_state)}</Typography>
          <Typography sx={{fontSize: "0.8rem"}}>{new Date(job.begin_date).toLocaleDateString() + ' - ' + new Date(job.end_date).toLocaleDateString()}</Typography>
          <Typography sx={{fontSize: "0.8rem"}}>{"$"+job.basic_rate_from+" per hour"}</Typography>
        </Stack>
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
  }

  const searchQuery = useGetSeasonalJobsQuery(searchQueryArgs.search ? searchQueryArgs : skipToken);

  const listWidth = "20vw"
  const listHeight = 0.84 * window.innerHeight

  return (
    <Box
      sx={{ minWidth: listWidth, minHeight: listHeight, width: listWidth, height: listHeight, bgcolor: 'background.paper', borderRight: "#C4C4C4 solid 1px" }}
    >
      {searchQuery.data ? (
          <FixedSizeList
            height={listHeight}
            width={listWidth}
            itemSize={110}
            itemCount={searchQuery.data.value.length}
            overscanCount={5}
            itemData={searchQuery.data.value}
          >
            {RenderRow}
          </FixedSizeList>
      ) : 
      <Typography sx={{margin: "1vw"}}>No results to display.</Typography>
       }
    </Box>
  );
}