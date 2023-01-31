export enum BaseRoutes {
  AUTH = '/auth',
  DASHBOARD = '/dashboard',
}

export enum AppPaths {
  BASE = '/',
  LOGIN = '/login',
  HOME = '/app',
  SETTINGS = '/settings',
}

export const getAppNavigationPath = (
  path: AppPaths,
  base: BaseRoutes = BaseRoutes.DASHBOARD
) => {
  return `${base}${path}`;
};
