import { styled } from '@mui/system';
import tw from 'twin.macro';

export const DrawerContainer = styled('div')(
  ({ width }: { width?: number }) => ({
    width,
    transition: 'width .3s ease-in-out',
  })
);

export const DrawerContent = styled('div')({
  ...tw`bg-indigo-100 h-full rounded-tl-[2rem] rounded-bl-[2rem] transition-shadow`,
});
