import ThemeProvider from 'theme';
import Router from 'app.routes';
import { DashboardLayoutDrawerProvider } from 'context/dashboard-layout-drawer.context';
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <ThemeProvider>
      <SnackbarProvider maxSnack={3}>
        <DashboardLayoutDrawerProvider>
          <Router />
        </DashboardLayoutDrawerProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
