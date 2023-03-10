import { Avatar, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { TbLogout, TbSettings } from 'react-icons/tb';
import { useContext } from 'react';

import { AuthContext } from 'context/auth.context';
import { navConfig } from 'constants/nav.config';

import { Main, StyledNavItem, StyledNavItemIcon } from './Sidenav.styles';
import { AppPaths, getAppNavigationPath } from 'constants/routes';

const ICON_SIZE = 20;

const Sidenav = () => {
  const { userLogged, logout } = useContext(AuthContext);

  return (
    <Main>
      <div className='flex flex-col items-center pt-10 pb-14'>
        <Avatar
          className='w-24 h-24 bg-sky-400 text-4xl mb-3'
          src='/assets/images/david-avatar.jpg'
        >
          D
        </Avatar>
        <p className='m-0 text-slate-400'>Welcome back,</p>
        <h3 className='m-0 text-xl'>{userLogged?.displayName ?? 'Guess'}</h3>
      </div>
      <div className='flex flex-col gap-1'>
        {navConfig.map((item, idx) => (
          <StyledNavItem
            key={idx}
            // @ts-ignore
            component={NavLink}
            to={item.path}
            sx={{
              '&.active': {
                color: 'text.primary',
                bgcolor: 'action.selected',
                fontWeight: 'fontWeightBold',
              },
            }}
          >
            <StyledNavItemIcon>
              <item.Icon size={ICON_SIZE} />
            </StyledNavItemIcon>
            <ListItemText disableTypography primary={item.title} />
          </StyledNavItem>
        ))}
      </div>
      <div className='h-full' />
      <StyledNavItem
        // @ts-ignore
        component={NavLink}
        to={getAppNavigationPath(AppPaths.SETTINGS)}
      >
        <StyledNavItemIcon>
          <TbSettings size={ICON_SIZE} />
        </StyledNavItemIcon>
        <ListItemText disableTypography primary='Settings' />
      </StyledNavItem>
      <StyledNavItem
        onClick={logout}
        className='hover:bg-red-50 transition-all'
      >
        <StyledNavItemIcon>
          <TbLogout className='text-red-500' size={ICON_SIZE} />
        </StyledNavItemIcon>
        <ListItemText
          className='text-red-500'
          disableTypography
          primary='Logout'
        />
      </StyledNavItem>
    </Main>
  );
};

export default Sidenav;
