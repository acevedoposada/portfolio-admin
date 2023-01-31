import { updateCurrentUser, updateProfile, User } from 'firebase/auth';
import { useSnackbar } from 'notistack';
import { useContext } from 'react';
import { useFormik } from 'formik';

import { AuthContext } from 'context/auth.context';
import { auth } from 'utils/server';

export const useSettingsController = () => {
  const { userLogged, updateLocalUser } = useContext(AuthContext);

  const { enqueueSnackbar } = useSnackbar();

  const { values, handleSubmit, handleChange, handleBlur, isSubmitting } =
    useFormik({
      initialValues: {
        name: userLogged?.displayName,
      },
      onSubmit(values, { setSubmitting }) {
        updateProfile(userLogged as User, {
          displayName: values.name,
        })
          .then(() => {
            updateLocalUser({
              displayName: values.name,
            });
            enqueueSnackbar('Changes saved successfully', {
              variant: 'success',
              anchorOrigin: {
                horizontal: 'right',
                vertical: 'bottom',
              },
            });
            updateCurrentUser(auth, userLogged);
          })
          .catch((error) => {
            enqueueSnackbar(`An error was ocurred (${error.message})`, {
              variant: 'error',
              anchorOrigin: {
                horizontal: 'right',
                vertical: 'bottom',
              },
            });
          })
          .finally(() => {
            setSubmitting(false);
          });
      },
    });

  return {
    form: { values, isSubmitting, handleSubmit, handleChange, handleBlur },
  };
};
