import {
  signInWithEmailAndPassword,
  signOut,
  setPersistence,
  browserSessionPersistence,
  onAuthStateChanged,
  User,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import { AppPaths, BaseRoutes, getAppNavigationPath } from 'constants/routes';
import { auth } from 'utils/server';
import { FC } from 'models/common';

const errorCodes = {
  'auth/too-many-requests': 'The user is blocked by multiple requests',
  'auth/user-not-found': 'User not found',
  'auth/wrong-password': 'Wrong password',
  default: 'An error was ocurred',
};

export interface AuthContextModel {
  userLogged: User | null;
  isLogged: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<any>;
  logout: () => Promise<any>;
  validateUser: (redirect?: boolean) => void;
  updateLocalUser: (user: Partial<User>) => void;
}

export const AuthContext = createContext<AuthContextModel>({
  userLogged: null,
  isLogged: false,
  loading: true,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  validateUser() {},
  updateLocalUser() {},
});

export const AuthProvider: FC = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [userLogged, setUserLogged] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    validateUser();
  }, []);

  const validateUser = async (redirect = true) =>
    await onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) {
        setUserLogged(user);
        if (redirect) navigate(getAppNavigationPath(AppPaths.HOME));
      } else {
        if (redirect)
          navigate(getAppNavigationPath(AppPaths.LOGIN, BaseRoutes.AUTH));
      }
    });

  const updateLocalUser = (userData: Partial<User>) =>
    setUserLogged((prev) => ({ ...prev, ...(userData as User) }));

  const login = (email: string, password: string) => {
    return setPersistence(auth, browserSessionPersistence)
      .then(() => {
        return signInWithEmailAndPassword(auth, email, password)
          .then((userCredentials) => {
            setIsLogged(true);
            setUserLogged(userCredentials.user);
            navigate(getAppNavigationPath(AppPaths.HOME));
          })
          .catch((error: { code: keyof typeof errorCodes }) => {
            setIsLogged(false);
            enqueueSnackbar(errorCodes[error.code || 'default'], {
              variant: 'error',
              anchorOrigin: {
                horizontal: 'left',
                vertical: 'bottom',
              },
            });
          });
      })
      .catch((error) => {
        enqueueSnackbar(error.message, {
          variant: 'error',
          anchorOrigin: {
            horizontal: 'left',
            vertical: 'bottom',
          },
        });
      });
  };

  const logout = () => {
    return signOut(auth)
      .then(() => {
        setIsLogged(false);
        navigate(getAppNavigationPath(AppPaths.LOGIN, BaseRoutes.AUTH));
      })
      .catch(() =>
        enqueueSnackbar('Ha ocurrido un error al cerrar sesión', {
          variant: 'error',
          autoHideDuration: 3000,
          anchorOrigin: {
            horizontal: 'right',
            vertical: 'bottom',
          },
        })
      );
  };

  return (
    <AuthContext.Provider
      value={{
        userLogged,
        isLogged,
        loading,
        login,
        logout,
        validateUser,
        updateLocalUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
