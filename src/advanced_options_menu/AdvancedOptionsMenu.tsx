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

const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        sx={{marginLeft: "15%", minWidth: "100%"}}
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
            <FormControlLabel control={<Checkbox defaultChecked />} label="Agricultural" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Non-Agricultural" />
          </FormGroup>
        </MenuItem>
        <MenuItem>
          <Stack direction="column" sx={{minWidth: "100%"}}>
            <Typography> Months Experience </Typography>
            <Slider defaultValue={0} max={12} size="small" valueLabelDisplay="auto" aria-label="slider-experience-required" />
          </Stack>
        </MenuItem>
        <MenuItem>
          <Stack direction="column" sx={{minWidth: "100%"}}>
            <Typography>Hours per Week</Typography>
            <Slider defaultValue={40} max={50} size="small" valueLabelDisplay="auto" aria-label="slider-hours" />
          </Stack>
        </MenuItem>
      </Menu>
    </div>
  );
}