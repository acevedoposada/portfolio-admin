import { SnackbarProvider } from 'notistack';

import { DashboardLayoutDrawerProvider } from 'context/dashboard-layout-drawer.context';
import { AuthProvider as AuthCtxProvider } from 'context/auth.context';
import ThemeProvider from 'theme';
import Router from 'app.routes';

function App() {
  return (
    <ThemeProvider>
      <SnackbarProvider maxSnack={3}>
        <AuthCtxProvider>
          <DashboardLayoutDrawerProvider>
            <Router />
          </DashboardLayoutDrawerProvider>
        </AuthCtxProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
