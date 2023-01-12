import { styled } from '@mui/material/styles';
import tw from 'twin.macro';

export const Banner = styled('div')({
  ...tw`w-full h-[11rem] bg-[url("/assets/bg/layout-banner.webp")] bg-cover`,
});

export const Container = styled('main')({
  ...tw`bg-white w-full h-full`,
});

export const Content = styled('div')({
  ...tw`mt-[9rem] flex flex-auto relative overflow-hidden pl-8`,
});
