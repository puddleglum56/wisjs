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

  const wordToUpperCase = (word : string) => {
    return word.substring(0,1).toUpperCase() + word.substring(1).toLowerCase();
  }

  const capitalize = (inString : string) => {
    return inString.split(' ').map((word : string) => wordToUpperCase(word)).join(' ')
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
        <IconButton onClick={() => dispatch(setDrawerClose())}>
          {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader>
      { job ? 
        <Stack direction="column" sx={{marginLeft: "2vw"}}>
          <Typography variant="h6">{capitalize(job.job_title)}</Typography>
          <br />
          <Divider />
          <br />
          <Typography variant="subtitle2">{capitalize(job.worksite_city)}, {capitalize(job.worksite_state)}</Typography>
          <br />
          <Typography variant="subtitle2">Pay:</Typography>
          <Typography>${job.basic_rate_from}-${job.basic_rate_to}</Typography>
          <Typography variant="subtitle2">Dates:</Typography>
          <Typography>{new Date(job.begin_date).toLocaleDateString()} - {new Date(job.end_date).toLocaleDateString()}</Typography>
          <Typography variant="subtitle2">Hours:</Typography>
          <Typography>{job.hourly_work_schedule_am} - {job.hourly_work_schedule_pm}</Typography>
          <Button variant="contained" onClick={() => window.open(`https://seasonaljobs.dol.gov/jobs/${job.case_number}`,'_blank')} sx={{marginTop: "1vh", marginBottom: "1vh", marginRight: "50%", maxWidth: "30%"}}>Apply</Button>
        </Stack>
      :
      null
      }
    </Drawer>
  );
}