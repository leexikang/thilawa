import { purple } from '@material-ui/core/colors';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const ThilawaTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#d32f2f',
      light: '#ff6659',
      dark: '#9a0007',
    },
    secondary: {
      main: '#31d3d3',
      light: '#75ffff',
      dark: '#00a1a2',
    },
  },
});

export default ThilawaTheme;
