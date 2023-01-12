import { ThemeOptions } from '@mui/material';

import Autocomplete from './Autocomplete';
import Typography from './Typography';
import Backdrop from './Backdrop';
import Tooltip from './Tooltip';
import Button from './Button';
import Table from './Table';
import Paper from './Paper';
import Input from './Input';
import Card from './Card';
import Fab from './Fab';

export default function ComponentsOverride(theme: ThemeOptions) {
  return Object.assign(
    Autocomplete(theme),
    Backdrop(theme),
    Button(theme),
    Card(theme),
    Fab(theme),
    Input(theme),
    Paper(),
    Typography(theme),
    Tooltip(theme),
    Table(theme)
  );
}
