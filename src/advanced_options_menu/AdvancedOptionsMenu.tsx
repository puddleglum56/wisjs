import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useAppDispatch, useAppSelector } from '../hooks';
import { setBoundingLocation, setHours, setLocation, setLocationAll, setMinimumWage, setRequiredExperience, toggleAgricultural, toggleNonagricultural } from './AdvancedOptionsMenuSlice';
import { TextField } from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import Geocode from 'react-geocode';
import { polygonFromBoundingBox } from '../utility';
import { GeoPoint } from '../map/MapSlice';

export default function AdvancedOptionsMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useAppDispatch()
  const  agricultural : boolean = useAppSelector((state) => state.advancedOptions.agricultural);
  const  nonagricultural : boolean = useAppSelector((state) => state.advancedOptions.nonagricultural);
  const  requiredExperience : number = useAppSelector((state) => state.advancedOptions.requiredExperience);
  const  hours : number = useAppSelector((state) => state.advancedOptions.hours);
  const  minimumWage : number = useAppSelector((state) => state.advancedOptions.minimumWage);
  const location : string = useAppSelector((state) => state.advancedOptions.location);

  const [locationValue, setLocationValue] = useState(location);

  const stopTypingTimeout : number = 600;

  // @ts-ignore
  const stopPropagation = (event : KeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
      case "ArrowDown":
      case "ArrowUp":
      case "Home":
      case "End":
        break;
      default:
        event.stopPropagation();
    }
  };

  const handleOnChange = (event : ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setLocationValue(event.target.value)

  const handleSearchAllLocations = () => {
    dispatch(setLocationAll(true))
    dispatch(setBoundingLocation([] as GeoPoint[]))
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(setLocation(locationValue))
      if (locationValue === "*") {
        handleSearchAllLocations()
      } else {
        Geocode.setApiKey("AIzaSyA-3X7TKl4j6TA0jrbvrDhTg4MiqUZbs7w")
        Geocode.setRegion("us")
        Geocode.fromAddress(locationValue).then(
          (response) => {
            if (response.results.length === 0) {
              console.log('No Geocoding location found, searching all locations')
              handleSearchAllLocations()
            } else {
              const polygon = polygonFromBoundingBox(response.results[0].geometry.bounds.northeast, response.results[0].geometry.bounds.southwest)
              dispatch(setBoundingLocation(polygon))
            }
          },
          (error) => {
            console.error(error);
            handleSearchAllLocations()
          }
        );
        dispatch(setLocationAll(false))
      }
    }, stopTypingTimeout);
    return () => clearTimeout(timeoutId);
  }, [locationValue]);

  return (
    <>
      <Button
        sx={{marginLeft: "1vw", width: "6vw", border: "#C4C4C4 solid 1px"}}
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
      Options
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem>
          <FormGroup sx={{display: "inline"}}>
            <FormControlLabel control={<Checkbox onChange={() => dispatch(toggleAgricultural())} checked={agricultural} />} label="Agricultural" />
            <FormControlLabel control={<Checkbox onChange={() => dispatch(toggleNonagricultural())} checked={nonagricultural} />} label="Non-Agricultural" />
          </FormGroup>
        </MenuItem>
        <MenuItem>
          <Stack direction="column" sx={{minWidth: "100%"}}>
            <Typography> Location </Typography>
            <TextField 
              placeholder='City, state, or ZIP...'
              variant="outlined" size="small"
              sx={{backgroundColor: "white", minWidth: "40%"}}
              onChange={(event) => handleOnChange(event)}
              onKeyDown={(event) => stopPropagation(event)}
              defaultValue={locationValue}
            />
          </Stack>
        </MenuItem>
        <MenuItem>
          <Stack direction="column" sx={{minWidth: "100%"}}>
            <Typography> Minimum Hourly Wage </Typography>
            <Slider track='inverted' onChangeCommitted={(_, value) => dispatch(setMinimumWage(value as number))} defaultValue={minimumWage} max={50} size="small" valueLabelDisplay="auto" aria-label="slider-wage" />
          </Stack>
        </MenuItem>
        <MenuItem>
          <Stack direction="column" sx={{minWidth: "100%"}}>
            <Typography> Months Experience </Typography>
            <Slider onChangeCommitted={(_, value) => dispatch(setRequiredExperience(value as number))} defaultValue={requiredExperience} max={24} size="small" valueLabelDisplay="auto" aria-label="slider-experience-required" />
          </Stack>
        </MenuItem>
        <MenuItem>
          <Stack direction="column" sx={{minWidth: "100%"}}>
            <Typography>Hours per Week</Typography>
            <Slider onChangeCommitted={(_, value) => dispatch(setHours(value as number))} defaultValue={hours} max={50} size="small" valueLabelDisplay="auto" aria-label="slider-hours" />
          </Stack>
        </MenuItem>
      </Menu>
    </>
  );
}