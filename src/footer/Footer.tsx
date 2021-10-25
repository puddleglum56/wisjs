import { Typography } from '@mui/material';
import './Footer.css';
import wemLogo from '../resources/wem_logo.svg';

function Footer() {
  return (
    <div className="footer">
      <div className="name-and-logo">
        <Typography>findseasonalvisas@gmail.com</Typography>
        <img onClick={() => window.open('https://github.com/puddleglum56','_blank')} src={wemLogo} alt="WEM Logo" className="wem-logo" />
      </div>
    </div>
  );
}

export default Footer; 
