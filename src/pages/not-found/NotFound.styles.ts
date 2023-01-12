import { motion } from 'framer-motion';
import { styled } from '@mui/system';
import tw from 'twin.macro';

export const Container = styled('div')({
  ...tw`h-full flex-auto w-full flex items-center justify-center`,
});

export const Bg = styled(motion.div)({
  ...tw`absolute h-full w-full bg-cover bg-[url('/assets/bg/layout-banner.webp')] opacity-30`,
});
