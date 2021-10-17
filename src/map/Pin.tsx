import './Pin.css'
import PlaceIcon from '@mui/icons-material/Place';
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip';
import { Job } from '../types/Job';
import styled from '@mui/material/styles/styled';
import { Button, Stack, Typography } from '@mui/material';
import { useAppSelector } from '../hooks';

type PinProps = {
    lat: number,
    lng: number,
    job: Job,
    $hover?: boolean
}

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.white,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

export default function Pin(props: PinProps) {
  const mapZoom = useAppSelector((state) => state.map.zoom)
  const pinMaxSize = 1.5
  const pinMinSize = 0.5
  const minZoom = 4
  const maxZoom = 10

  const hoverSizeChange = 0.2

  const map = (value: number, x1: number, y1: number, x2: number, y2: number) => (value - x1) * (y2 - x2) / (y1 - x1) + x2
  const pinSize : string = map(mapZoom, minZoom, maxZoom, pinMinSize, pinMaxSize).toString() + "em"
  const pinHoverSize : string = (map(mapZoom, minZoom, maxZoom, pinMinSize, pinMaxSize) + hoverSizeChange).toString() + "em"

  return (
    <LightTooltip placement="right-start" arrow title={
      <Stack direction="column">
        <Typography variant="h6">{props.job.job_title}</Typography>
        <Typography variant="subtitle2">Pay:</Typography>
        <Typography>${props.job.basic_rate_from}-${props.job.basic_rate_to}</Typography>
        <Typography variant="subtitle2">Dates:</Typography>
        <Typography>{new Date(props.job.begin_date).toLocaleDateString()} - {new Date(props.job.end_date).toLocaleDateString()}</Typography>
        <Typography variant="subtitle2">Hours:</Typography>
        <Typography>{props.job.hourly_work_schedule_am} - {props.job.hourly_work_schedule_pm}</Typography>
        <Button variant="contained" sx={{marginTop: "1vh", marginBottom: "1vh", marginRight: "50%", maxWidth: "30%"}}>Apply</Button>
      </Stack>
      }>
      <PlaceIcon sx={{color: "#1565C0", transform: "translate(-50%, -50%)", height: props.$hover ? pinHoverSize : pinSize, width: props.$hover ? pinHoverSize : pinSize}} />
    </LightTooltip>
  );
}