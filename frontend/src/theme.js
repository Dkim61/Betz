import { createTheme } from '@mui/material/styles';
import { amber } from '@mui/material/colors';
import { blue } from '@mui/material/colors';



const theme = createTheme({
  palette: {
    primary: amber,
    secondary: blue
  },
  colors: {
    bgColor: '#E8FF59',
    bgLightColor: '#F4FFB3',
    mainAccentColor: '#4B4B48',
  }
});

export default theme;