//import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

//const headingColor = '#004346';
//const colorBlock = '#000000';
const colorBlue = '#1976d2';

const theme = (createMuiTheme as any)({
  palette: {
    primary: {
      main: colorBlue
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '#FFFFFF',
    },
    background: {
      default: '#ffffff'
    },
    action: {
      active: '#ffffff',
      selected: '#ffffff',
      hover: '#ffffff',
      disabled: '#ffffff',
    },
    menu: {
      listStyle: 'none',
      '& li': {
        display: 'inline-block',
        padding: '0 10px'
      }
    }
  },

  overrides: {
    MuiDrawer: {
      background: '#18202c',
    },
  },

});

export default theme;