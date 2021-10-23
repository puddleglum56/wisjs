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
import { setHours, setRequiredExperience, toggleAgricultural, toggleNonagricultural } from './AdvancedOptionsMenuSlice';

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

  return (
    <>
      <Button
        sx={{marginLeft: "1vw", width: "12vw", border: "#C4C4C4 solid 1px"}}
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Advanced Options
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