import { useFormik } from 'formik';
import { useContext, useState } from 'react';
import * as yup from 'yup';

import { AuthContext } from 'context/auth.context';

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const useLoginController = () => {
  const { login } = useContext(AuthContext);
  const [loading, setLoading] = useState<boolean>(false);
  const [showPass, setShowPass] = useState<boolean>(false);

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: { email: '', password: '' },
      validationSchema,
      onSubmit(values) {
        setLoading(true);
        login(values.email, values.password);
        setLoading(false);
      },
    });

  const toggleShowPass = () => setShowPass((prev) => !prev);

  return {
    loading,
    showPass,
    toggleShowPass,
    form: { values, errors, touched, handleSubmit, handleChange, handleBlur },
  };
};
