import { useLocation } from 'react-router-dom';
import _ from 'lodash';

import { resumeMenu } from 'constants/resume';

export const useResumeController = () => {
  const { pathname } = useLocation();

  const getBorder = () => {
    const separatedPathname = pathname.split('/');
    const activePath = separatedPathname[separatedPathname.length - 1];
    const sectionActive = _.find(
      resumeMenu,
      (item) => item.title === activePath
    );
    return sectionActive?.borderColor;
  };

  const getActivePath = (path: string): boolean => pathname.includes(path);

  return { getBorder, getActivePath, resumeMenu };
};
