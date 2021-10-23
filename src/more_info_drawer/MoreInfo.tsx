import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch, useAppSelector } from '../hooks';
import { setDrawerClose } from './MoreInfoSlice';
import Stack from '@mui/material/Stack';
import { Box, Button, Typography } from '@mui/material';
import { capitalize } from '../utility';
import { GeoPoint, selectJob, setMapCenter, setMapZoom } from '../map/MapSlice';
import MapIcon from '@mui/icons-material/Map';

const drawerWidth = 0.4 * window.innerWidth;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'space-between',
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
        borderLeft: "#C4C4C4 solid 1px",
        '& .MuiDrawer-paper': {
          width: `${drawerWidth - 2}px`,
          top: '55px',
          height: "auto",
          borderLeft: "none",
        },
      }}
      variant="persistent"
      anchor="right"
      open={open}
    >
      <DrawerHeader>
          { job ? 
          <>
          <Typography sx={{marginLeft: "1vw", fontWeight: "bold"}} variant="h5">{capitalize(job.job_title)}</Typography>
          </>
          :
          null
          }
          <IconButton sx={{width: "50px", height: "50px"}} onClick={() => dispatch(setDrawerClose())}>
            <CloseIcon sx={{width: "30px", height: "30px"}}></CloseIcon>
          </IconButton>
      </DrawerHeader>
      <Divider />
      { job ? 
        <Stack direction="column" sx={{marginLeft: "1vw", marginTop: "1vh"}}>
          <Stack direction="row">
            <Typography variant="h5">{capitalize(job.worksite_city)}, {capitalize(job.worksite_state.toLowerCase())}</Typography>
            <IconButton sx={{marginLeft: "0.5vw"}} onClick={() => handleLocationClick()}>
              <MapIcon sx={{width: "20px", height: "20px"}} />
            </IconButton>
          </Stack>
          <Stack direction="row" alignItems="center" marginTop="1vh" spacing={2}>
            <Typography fontWeight="bold">Employer:</Typography>
            <Typography>{job.employer_business_name}</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography fontWeight="bold">Hourly wage:</Typography>
            <Typography>${job.basic_rate_from}{(job.basic_rate_to != 0) ? `-${job.basic_rate_to}`:''}</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography fontWeight="bold">Dates:</Typography>
            <Typography>{new Date(job.begin_date).toLocaleDateString()} - {new Date(job.end_date).toLocaleDateString()}</Typography>
          </Stack>
          <Divider sx={{marginLeft: "-1vw", marginTop: "1vh", marginBottom: "1vh"}} />
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography fontWeight="bold">Shift:</Typography>
            <Typography>{job.hourly_work_schedule_am} - {job.hourly_work_schedule_pm}</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography fontWeight="bold">Hours per week:</Typography>
            <Typography>{job.work_hour_num_basic}</Typography>
          </Stack>
          <Typography fontWeight="bold">Job Duties:</Typography>
          <Box overflow="auto" maxHeight="28vh" marginRight="1vw"> 
            <Typography>{job.job_duties}</Typography>
          </Box>
          <Divider sx={{marginLeft: "-1vw", marginTop: "1vh", marginBottom: "1vh"}} />
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography fontWeight="bold">Apply Telephone:</Typography>
            <Typography>{job.apply_phone}</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography fontWeight="bold">Apply Email:</Typography>
            <Typography>{job.apply_email}</Typography>
          </Stack>
          <Button variant="contained" onClick={() => window.open(`https://seasonaljobs.dol.gov/jobs/${job.case_number}`,'_blank')} sx={{marginTop: "2vh", marginBottom: "2vh", marginRight: "50%", maxWidth: "30%"}}>More Info</Button>
        </Stack>
      :
      null
      }
    </Drawer>
  );
}