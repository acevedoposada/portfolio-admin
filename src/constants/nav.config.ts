import { TbHome, TbAd2, TbTemplate, TbListCheck } from 'react-icons/tb';

export enum Routes {
  BASE = '/',
  DASHBOARD = '/dashboard/app',
  BLOG = '/dashboard/blogs',
  RESUME = '/dashboard/resume',
  PROJECTS = '/dashboard/projects',
}

export const navConfig = [
  { title: 'dashboard', path: Routes.DASHBOARD, Icon: TbHome },
  { title: 'blog', path: Routes.BLOG, Icon: TbAd2 },
  { title: 'resume', path: Routes.RESUME, Icon: TbTemplate },
  { title: 'projects', path: Routes.PROJECTS, Icon: TbListCheck },
];
