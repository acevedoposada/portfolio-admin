import { TbCalendarEvent, TbSearch } from 'react-icons/tb';
import { Button, Fab, Typography } from '@mui/material';
import { useContext } from 'react';
import dayjs from 'dayjs';
import clsx from 'clsx';

import { DashboardLayoutDrawerCtx } from 'context/dashboard-layout-drawer.context';
import { AuthContext } from 'context/auth.context';

const DashboardPage = () => {
  const { open, toggle } = useContext(DashboardLayoutDrawerCtx);
  const { userLogged } = useContext(AuthContext);

  return (
    <div className='flex flex-auto flex-col'>
      <header className='flex justify-end pb-4 pt-8 gap-4'>
        <div className='flex flex-col justify-center'>
          <Typography variant='h3' className='leading-none'>
            Hi, {userLogged?.displayName ?? 'Guess'}!
          </Typography>
          <Typography className='text-slate-500 text-md font-light'>
            Today is {dayjs().format('dddd, DD MMMM YYYY')}
          </Typography>
        </div>
        <span className='flex flex-auto' />
        <Button variant='contained' className='h-12'>
          Add new post
        </Button>
        <Fab size='medium' className='outlined-fab'>
          <TbSearch size={20} className='text-blue-500' />
        </Fab>
        <Fab
          onClick={toggle}
          size='medium'
          className={clsx({
            'outlined-fab': true,
            '!bg-blue-50': open,
          })}
        >
          <TbCalendarEvent size={20} className='text-blue-500' />
        </Fab>
      </header>
      <div></div>
    </div>
  );
};

export default DashboardPage;
