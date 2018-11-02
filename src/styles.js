import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const drawerWidth = 240;

const primary = '#7f121a';
const secondary = '#2663bc';
const surface = '#ffffff';
const surfaceDark = '#f9f9f9';

export const styles = createMuiTheme(
  {
    palette : {
      primary : {
        main : primary
      },
      secondary : {
        main : secondary
      },
      surface : {
        main : surface,
        dark : surfaceDark,
      }
    },
    typography: {
      useNextVariants: true,
    }
  });