import { createContext, useState } from 'react';

import { FC } from 'models/common';

export const ResumeContext = createContext({
  loading: false,
  toggleLoading: (open: boolean) => {},
});

export const ResumeContextProvider: FC = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const toggleLoading = (state: boolean) => setLoading(state);

  return (
    <ResumeContext.Provider value={{ loading, toggleLoading }}>
      {children}
    </ResumeContext.Provider>
  );
};
