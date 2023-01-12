import { Outlet } from 'react-router-dom';

import { InlineDrawer, Sidenav } from 'components';

import { Banner, Content, Container } from './Dashboard.styles';
import { useContext } from 'react';
import { DashboardLayoutDrawerCtx } from 'context/dashboard-layout-drawer.context';

const DashboardLayout = () => {
  const { open } = useContext(DashboardLayoutDrawerCtx);

  return (
    <Container>
      <Banner />
      <section className='absolute top-0 left-0 h-full w-full flex flex-auto pt-8 pl-8'>
        <div className='pb-8 h-full flex'>
          <Sidenav />
        </div>
        <Content>
          <div className='flex flex-col flex-auto pb-8 pr-8'>
            <Outlet />
          </div>
          <InlineDrawer open={open} width={300}>
            <div className='p-6'>content</div>
          </InlineDrawer>
        </Content>
      </section>
    </Container>
  );
};

export default DashboardLayout;
