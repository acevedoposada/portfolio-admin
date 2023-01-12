import {
  ListItemButton,
  ListItemButtonProps,
  ListItemIcon,
} from '@mui/material';
import { JSXElementConstructor } from 'react';
import { styled } from '@mui/material/styles';
import tw from 'twin.macro';
import { Link } from 'react-router-dom';

export const Main = styled('nav')({
  ...tw`bg-white min-w-[22rem] rounded-3xl shadow-2xl pt-8 px-2 pb-4 flex flex-col`,
});

export const StyledNavItem = styled<JSXElementConstructor<ListItemButtonProps>>(
  (props) => <ListItemButton disableGutters {...props} />
)(({ theme }) => ({
  ...tw`transition-all`,
  ...theme.typography.body1,
  height: 48,
  position: 'relative',
  textTransform: 'capitalize',
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
}));

export const StyledNavItemIcon = styled(ListItemIcon)({
  width: 22,
  height: 22,
  color: 'inherit',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
