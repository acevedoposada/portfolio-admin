import { Navigate, useRoutes } from 'react-router-dom';

/* Layouts */
import { DashboardLayout, SimpleLayout } from 'layouts';

/* Pages */
import {
  DashboardPage,
  BlogsPage,
  ResumePage,
  AboutResumePage,
  NotFoundPage,
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
            { path: 'education', element: <DummyPage /> },
            { path: 'experience', element: <DummyPage /> },
            { path: 'interest', element: <DummyPage /> },
            { path: 'skill', element: <DummyPage /> },
          ],
        },
        { path: 'blogs', element: <BlogsPage /> },
      ],
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to='/dashboard/app' />, index: true },
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
