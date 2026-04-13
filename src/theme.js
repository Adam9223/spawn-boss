import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#11615f' },
    secondary: { main: '#b5344a' },
    background: { default: '#f4f7f5', paper: '#ffffff' },
    text: { primary: '#172321', secondary: '#66706d' },
  },
  shape: { borderRadius: 8 },
  typography: {
    fontFamily: '"Segoe UI", Roboto, Arial, sans-serif',
    button: { textTransform: 'none', letterSpacing: 0 },
    h4: { fontWeight: 700, letterSpacing: 0 },
    h6: { fontWeight: 700, letterSpacing: 0 },
  },
});

export default theme;
