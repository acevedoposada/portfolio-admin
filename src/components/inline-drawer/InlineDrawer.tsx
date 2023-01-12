import clsx from 'clsx';

import { FC } from 'models/common';

import { InlineDrawerProps } from './InlineDrawer.model';
import { DrawerContainer, DrawerContent } from './InlineDrawer.styles';

const DEFAULT_WIDTH = 250;

const InlineDrawer: FC<InlineDrawerProps> = ({
  open,
  children,
  width = DEFAULT_WIDTH,
}) => {
  return (
    <DrawerContainer width={open ? width : 0}>
      <DrawerContent
        style={{ width }}
        className={clsx({
          'shadow-xl': open,
        })}
      >
        {children}
      </DrawerContent>
    </DrawerContainer>
  );
};

export default InlineDrawer;
