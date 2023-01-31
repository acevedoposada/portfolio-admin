import { Card } from '@mui/material';
import { styled } from '@mui/system';
import tw from 'twin.macro';

export const Container = styled('div')({
  backgroundImage: 'url("/assets/bg/layout-banner.webp")',
  ...tw`h-full flex bg-cover`,
});

export const Content = styled('div')({
  ...tw`flex flex-col justify-between h-full w-[500px] min-w-[500px] shadow-2xl bg-white z-10`,
});

export const Hero = styled('aside')({
  ...tw`w-full h-full`,
});
