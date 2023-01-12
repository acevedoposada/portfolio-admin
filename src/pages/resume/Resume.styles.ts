import { Card, styled } from '@mui/material';
import tw from 'twin.macro';

export const CardItem = styled(Card)({
  ...tw`flex items-center gap-3 p-3 shadow-lg w-48`,
  transition: 'all .2s ease-in',
});
