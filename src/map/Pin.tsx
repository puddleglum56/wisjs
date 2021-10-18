import './Pin.css'
import pinImage from './custom_location_pin.png'
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
  const pinMaxSize = 0.3
  const pinMinSize = 0.08
  const minZoom = 4
  const maxZoom = 10

  const hoverSizeChange = 0.05

  const map = (value: number, x1: number, y1: number, x2: number, y2: number) => (value - x1) * (y2 - x2) / (y1 - x1) + x2
  const pinSize = map(mapZoom, minZoom, maxZoom, pinMinSize, pinMaxSize)
  const pinHoverSize = map(mapZoom, minZoom, maxZoom, pinMinSize, pinMaxSize) + hoverSizeChange

  const pinStyle = {cursor: "pointer", color: "#1565C0", transform: `translate(-50%, -50%) scale(${props.$hover ? pinHoverSize : pinSize})`} 

  return (
      <img style={pinStyle} src={pinImage} />
  );
}