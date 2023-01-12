import ThemeProvider from 'theme';
import Router from 'app.routes';
import { DashboardLayoutDrawerProvider } from 'context/dashboard-layout-drawer.context';

function App() {
  return (
    <ThemeProvider>
      <DashboardLayoutDrawerProvider>
        <Router />
      </DashboardLayoutDrawerProvider>
    </ThemeProvider>
  );
}

export default App;
