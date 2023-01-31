import { Navigate, useRoutes } from 'react-router-dom';

/* Layouts */
import { AuthLayout, DashboardLayout, SimpleLayout } from 'layouts';

/* Pages */
import {
  DashboardPage,
  BlogsPage,
  ResumePage,
  AboutResumePage,
  EducationResumePage,
  NotFoundPage,
  LoginPage,
  SettingsPage,
} from 'pages';

const DummyPage = () => <div>Dummy page</div>;

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to='/dashboard/app' />, index: true },
        { path: 'app', element: <DashboardPage /> },
        {
          path: 'resume',
          element: <ResumePage />,
          children: [
            { element: <Navigate to='/dashboard/resume/about' />, index: true },
            { path: 'about', element: <AboutResumePage /> },
            { path: 'education', element: <EducationResumePage /> },
            { path: 'experience', element: <DummyPage /> },
            { path: 'interest', element: <DummyPage /> },
            { path: 'skill', element: <DummyPage /> },
          ],
        },
        { path: 'blogs', element: <BlogsPage /> },
        { path: 'settings', element: <SettingsPage /> },
      ],
    },
    {
      path: '/auth',
      element: <AuthLayout />,
      children: [
        { element: <Navigate to='/auth/login' />, index: true },
        {
          path: 'login',
          element: <LoginPage />,
        },
      ],
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to='/auth/login' />, index: true },
        { path: '404', element: <NotFoundPage /> },
        { path: '*', element: <Navigate to='/404' /> },
      ],
    },
    {
      element: <DashboardLayout />,
      children: [{ element: <Navigate to='/dashboard/app' />, index: true }],
    },
    {
      path: '*',
      element: <Navigate to='/404' />,
    },
  ]);

  return routes;
}
