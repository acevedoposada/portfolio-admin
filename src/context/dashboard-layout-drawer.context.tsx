import { createContext, useState } from 'react';

import { FC } from 'models/common';

interface DashboardLayoutDrawerValue {
  open: boolean;
  toggle: () => void;
}

export const DashboardLayoutDrawerCtx =
  createContext<DashboardLayoutDrawerValue>({
    open: false,
    toggle: () => {},
  });

export const DashboardLayoutDrawerProvider: FC = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen((prev) => !prev);

  return (
    <DashboardLayoutDrawerCtx.Provider value={{ open, toggle: handleToggle }}>
      {children}
    </DashboardLayoutDrawerCtx.Provider>
  );
};
