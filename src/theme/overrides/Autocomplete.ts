import { ThemeOptions } from '@mui/material';

export default function Autocomplete(theme: ThemeOptions & any) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: theme.customShadows.z20,
        },
      },
    },
  };
}
