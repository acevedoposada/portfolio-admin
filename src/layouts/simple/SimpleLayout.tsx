import { Outlet } from 'react-router-dom';

const SimpleLayout = () => {
  return (
    <main className='h-full w-full'>
      <Outlet />
    </main>
  );
};

export default SimpleLayout;
