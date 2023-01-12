import { ThemeOptions } from '@mui/material/styles';
import tw from 'twin.macro';

export default function Fab(theme: ThemeOptions & any) {
  return {
    MuiFab: {
      styleOverrides: {
        root: {
          '&.outlined-fab': {
            ...tw`shadow-none bg-transparent border border-blue-300 border-solid rounded-2xl`,
          },
        },
      },
    },
  };
}
