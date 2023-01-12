import { alpha, ThemeOptions } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function Backdrop(theme: ThemeOptions & any) {
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(theme.palette.grey[800], 0.8),
        },
        invisible: {
          background: 'transparent',
        },
      },
    },
  };
}
