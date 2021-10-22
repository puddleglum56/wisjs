import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useAppDispatch, useAppSelector } from '../hooks';
import { setDrawerClose } from './MoreInfoSlice';
import Stack from '@mui/material/Stack';
import { Button, Typography } from '@mui/material';
import { capitalize } from '../utility';
import { GeoPoint, selectJob, setMapCenter, setMapZoom } from '../map/MapSlice';
import NotListedLocationIcon from '@mui/icons-material/NotListedLocation';

const drawerWidth = "40vw";

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export default function MoreInfo() {
  const theme = useTheme()
  const open = useAppSelector((state) => state.moreInfo.open)
  const job = useAppSelector((state) => state.map.selectedJob)
  const dispatch = useAppDispatch()

  const handleLocationClick = () => {
    if(job != null) {
      dispatch(selectJob(job))
      dispatch(setMapCenter({lng: job.coord.coordinates[0], lat: job.coord.coordinates[1]} as GeoPoint))
      dispatch(setMapZoom(7))
    }
  }

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 1,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          top: '54px'
        },
      }}
      variant="persistent"
      anchor="right"
      open={open}
    >
      <DrawerHeader>
        <Stack direction="row" sx={{alignItems: "center"}}>
          <IconButton onClick={() => dispatch(setDrawerClose())}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon sx={{width: "30px", height: "30px"}} /> : <ChevronRightIcon sx={{width: "30px", height: "30px"}} />}
          </IconButton>
          { job ? 
          <>
          <Typography sx={{marginLeft: "1vw"}} variant="h5">{capitalize(job.job_title)}</Typography>
          <IconButton sx={{marginLeft: "0.5vw"}} onClick={() => handleLocationClick()}>
            <NotListedLocationIcon sx={{width: "20px", height: "20px"}} />
          </IconButton>
          </>
          :
          null
          }
        </Stack>
      </DrawerHeader>
      <Divider />
      { job ? 
        <Stack direction="column" sx={{marginLeft: "2vw"}}>
          <br />
          <Typography variant="h5">{capitalize(job.worksite_city)}, {capitalize(job.worksite_state.toLowerCase())}</Typography>
          <br />
          <Typography variant="h6">Pay:</Typography>
          <Typography>${job.basic_rate_from}-${job.basic_rate_to}</Typography>
          <Typography variant="h6">Dates:</Typography>
          <Typography>{new Date(job.begin_date).toLocaleDateString()} - {new Date(job.end_date).toLocaleDateString()}</Typography>
          <Typography variant="h6">Hours:</Typography>
          <Typography>{job.hourly_work_schedule_am} - {job.hourly_work_schedule_pm}</Typography>
          <Button variant="contained" onClick={() => window.open(`https://seasonaljobs.dol.gov/jobs/${job.case_number}`,'_blank')} sx={{marginTop: "1vh", marginBottom: "1vh", marginRight: "50%", maxWidth: "30%"}}>Apply</Button>
        </Stack>
      :
      null
      }
    </Drawer>
  );
}