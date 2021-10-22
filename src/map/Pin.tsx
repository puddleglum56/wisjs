import './Pin.css'
import pinImage from './custom_location_pin.png'
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip';
import { Job } from '../types/Job';
import styled from '@mui/material/styles/styled';
import { useAppDispatch, useAppSelector } from '../hooks';
import { setDrawerOpen } from '../more_info_drawer/MoreInfoSlice';
import { selectJob } from './MapSlice';

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
  const selectedJob = useAppSelector((state) => state.map.selectedJob)

  const thisPinSelected = (selectedJob == props.job)

  const dispatch = useAppDispatch()

  const pinMaxSize = 0.3
  const pinMinSize = 0.08
  const minZoom = 4
  const maxZoom = 10

  const hoverSizeChange = 0.05
  const selectedSizeChange = 0.2

  const handleClick = () => {
    dispatch(setDrawerOpen())
    dispatch(selectJob(props.job))
  }

  const map = (value: number, x1: number, y1: number, x2: number, y2: number) => (value - x1) * (y2 - x2) / (y1 - x1) + x2
  const pinSize = map(mapZoom, minZoom, maxZoom, pinMinSize, pinMaxSize)
  const pinHoverSize = map(mapZoom, minZoom, maxZoom, pinMinSize, pinMaxSize) + hoverSizeChange
  const pinSelectedSize = map(mapZoom, minZoom, maxZoom, pinMinSize, pinMaxSize) + selectedSizeChange

  const pinStyle = {cursor: "pointer", color: "#1565C0", transform: `translate(-50%, -50%) scale(${thisPinSelected ? pinSelectedSize : (props.$hover ? pinHoverSize : pinSize)})`} 

  return (
      <img style={pinStyle} src={pinImage} onClick={() => handleClick()} />
  );
}