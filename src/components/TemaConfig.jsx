import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        light: '#d3b8ae',
        main: '#a1887f',
        dark: '#725b53',
        contrastText: '#3e2723',
      },
      secondary: {
        light: '#efdcd5',
        main: '#bcaaa4',
        dark: '#8c7b75',
        contrastText: '#4e342e',
      },
    },  
});

export default theme;