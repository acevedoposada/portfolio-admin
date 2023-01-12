import { ThemeOptions } from '@mui/material';
import tw from 'twin.macro';

export default function Typography(theme: ThemeOptions) {
  return {
    MuiTypography: {
      styleOverrides: {
        root: {
          ...tw`text-slate-700`,
        },
        paragraph: {
          // @ts-ignore
          marginBottom: theme.spacing(2),
        },
        gutterBottom: {
          // @ts-ignore
          marginBottom: theme.spacing(1),
        },
      },
    },
  };
}
