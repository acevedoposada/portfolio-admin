import { Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import dayjs from 'dayjs';

import { Container, Content, Hero } from './AuthLayout.styles';
import { AuthContext } from 'context/auth.context';

const AuthLayout = () => {
  const { validateUser } = useContext(AuthContext);

  useEffect(() => {
    validateUser();
  }, []);

  return (
    <Container>
      <Content>
        <Outlet />
        <Typography
          variant='caption'
          className='text-center text-slate-400 pb-4'
        >
          Copyrigth © {dayjs().format('YYYY')} | David Acevedo
        </Typography>
      </Content>
      <Hero />
    </Container>
  );
};

export default AuthLayout;
