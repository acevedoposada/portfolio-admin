import { alpha, ThemeOptions } from '@mui/material/styles';
import tw from 'twin.macro';

// ----------------------------------------------------------------------

export default function Input(theme: ThemeOptions) {
  return {
    MuiInputBase: {
      styleOverrides: {
        root: {
          ...tw`!rounded-2xl`,
          '&.Mui-disabled': {
            '& svg': { color: theme?.palette?.text?.disabled },
          },
        },
        input: {
          '&::placeholder': {
            opacity: 1,
            color: theme?.palette?.text?.disabled,
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          '&:before': {
            // @ts-ignore
            borderBottomColor: alpha(theme.palette.grey[500], 0.56),
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          // @ts-ignore
          backgroundColor: alpha(theme.palette.grey[500], 0.12),
          '&:hover': {
            // @ts-ignore
            backgroundColor: alpha(theme.palette.grey[500], 0.16),
          },
          '&.Mui-focused': {
            backgroundColor: theme?.palette?.action?.focus,
          },
          '&.Mui-disabled': {
            backgroundColor: theme?.palette?.action?.disabledBackground,
          },
        },
        underline: {
          '&:before': {
            // @ts-ignore
            borderBottomColor: alpha(theme.palette.grey[500], 0.56),
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            // @ts-ignore
            borderColor: alpha(theme.palette.grey[500], 0.32),
          },
          '&.Mui-disabled': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: theme?.palette?.action?.disabledBackground,
            },
          },
        },
      },
    },
  };
}
