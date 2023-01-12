import { CssBaseline, ThemeOptions } from '@mui/material';
import { useMemo } from 'react';
import {
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
  createTheme,
} from '@mui/material/styles';

import { FC } from 'models/common';

import customShadows from './customShadows';
import GlobalStyles from './globalStyles';
import typography from './typography';
import palette from './palette';
import shadows from './shadows';
import componentsOverride from './overrides';

const ThemeProvider: FC = ({ children }) => {
  const themeOptions = useMemo(
    () => ({
      palette,
      typography,
      shape: { borderRadius: 6 },
      shadows: shadows(),
      customShadows: customShadows(),
    }),
    []
  );

  const theme = createTheme(themeOptions as unknown as ThemeOptions);
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <GlobalStyles />
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeProvider;
