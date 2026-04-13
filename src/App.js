import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { HashRouter, useRoutes } from 'react-router-dom';
import routes from './route';
import theme from './theme';
import './App.css';

function buildRoutes(routeItems) {
  return routeItems.map(({ element: RouteElement, children, ...route }) => ({
    ...route,
    element: <RouteElement />,
    children: children ? buildRoutes(children) : undefined,
  }));
}

function AppRoutes() {
  return useRoutes(buildRoutes(routes));
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
        <AppRoutes />
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
