import { Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import TrackerPage from './pages/TrackerPage';
import WeekliesSchedulePage from './pages/WeekliesSchedulePage';
import WeeklyMaterialsPage from './pages/WeeklyMaterialsPage';

const RedirectHome = () => <Navigate to="/" replace />;

const routes = [
  {
    path: '/',
    element: LandingPage,
  },
  {
    path: '/tracker',
    element: TrackerPage,
  },
  {
    path: '/weekly-materials',
    element: WeeklyMaterialsPage,
  },
  {
    path: '/weeklies-schedule',
    element: WeekliesSchedulePage,
  },
  {
    path: '*',
    element: RedirectHome,
  },
];

export default routes;
