import { Fab, InputAdornment, TextField, Typography } from '@mui/material';
import {
  TbExternalLink,
  TbEye,
  TbEyeOff,
  TbLock,
  TbMail,
} from 'react-icons/tb';
import { LoadingButton } from '@mui/lab';

import { useLoginController } from 'controllers/pages';
import { PORTFOLIO_URL } from 'constants/common';

import { Container } from './Login.styles';

const ICON_SIZE = 20;

const Login = () => {
  const { loading, form, showPass, toggleShowPass } = useLoginController();
  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    form;

  return (
    <Container>
      <div className='bg-sky-200 pt-8'>
        <img src='/assets/memojis/hi.png' className='mx-auto drop-shadow-2xl' />
      </div>
      <form
        onSubmit={handleSubmit}
        className='h-full w-full flex flex-col p-10 gap-8'
      >
        <div className='mb-4'>
          <Typography variant='h2' className='tracking-tight'>
            Portfolio Admin
          </Typography>
          <Typography variant='h3' className='flex items-center leading-none'>
            of
            <a
              href={PORTFOLIO_URL}
              target='_blank'
              className='no-underline text-sky-500 flex items-center ml-2 gap-1'
            >
              David Acevedo
              <TbExternalLink />
            </a>
          </Typography>
        </div>
        <TextField
          label='Email'
          name='email'
          error={!!(errors.email && touched.email)}
          value={values.email}
          helperText={touched.email && errors.email}
          onChange={handleChange}
          onBlur={handleBlur}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <TbMail size={20} />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label='Password'
          name='password'
          error={!!(errors.password && touched.password)}
          value={values.password}
          helperText={touched.password && errors.password}
          onChange={handleChange}
          onBlur={handleBlur}
          type={showPass ? 'text' : 'password'}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <TbLock size={ICON_SIZE} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position='end'>
                <Fab
                  size='small'
                  className='bg-transparent shadow-none'
                  onClick={toggleShowPass}
                >
                  {showPass ? (
                    <TbEye size={ICON_SIZE} />
                  ) : (
                    <TbEyeOff size={ICON_SIZE} />
                  )}
                </Fab>
              </InputAdornment>
            ),
          }}
        />
        <LoadingButton type='submit' variant='contained' loading={loading}>
          Login
        </LoadingButton>
      </form>
    </Container>
  );
};

export default Login;
