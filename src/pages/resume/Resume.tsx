import { Avatar, Card, CircularProgress, Typography } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import dayjs from 'dayjs';
import clsx from 'clsx';
import _ from 'lodash';

import { ResumeContext, ResumeContextProvider } from 'context/resume.context';
import { useResumeController } from 'controllers/pages';
import { getNavigationPath } from 'constants/resume';

import { CardItem } from './Resume.styles';
import { AnimatePresence } from 'framer-motion';

const loaderVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const Resume = () => {
  const { getActivePath, getBorder, resumeMenu } = useResumeController();
  const { loading } = useContext(ResumeContext);

  return (
    <div className='pt-8 h-full flex flex-col'>
      <div>
        <Typography variant='h3' className='leading-none mb-8'>
          Resume{' '}
          <span className='font-light text-sm text-slate-500'>
            (Last change {dayjs().format('dddd, DD MMMM YYYY')})
          </span>
        </Typography>
      </div>
      <div className='flex flex-auto gap-6'>
        <div className='flex flex-col h-full w-48 gap-4'>
          {_.map(resumeMenu, (section) => {
            const isActive = getActivePath(section.title);
            return (
              <Link
                key={section.title}
                to={getNavigationPath(section.title)}
                className='no-underline'
              >
                <CardItem
                  className={clsx({
                    [`w-60 ${section.color}`]: isActive,
                  })}
                >
                  <Avatar
                    className={clsx('w-8 h-8 transition-all', {
                      [`${section.color}`]: !isActive,
                      [`bg-white ${section.iconColor} shadow-xl`]: isActive,
                    })}
                  >
                    {section.icon}
                  </Avatar>
                  <div>
                    <Typography
                      className={clsx('font-semibold capitalize leading-none', {
                        'text-slate-800': !isActive,
                        'text-white': isActive,
                      })}
                    >
                      {section.title}
                    </Typography>
                    <Typography
                      variant='caption'
                      component='p'
                      className={clsx('leading-none mt-1', {
                        'text-slate-500': !isActive,
                        'text-white': isActive,
                      })}
                    >
                      {section.description}
                    </Typography>
                  </div>
                </CardItem>
              </Link>
            );
          })}
        </div>
        <Card
          className={clsx(
            'w-full shadow-xl p-4 border-4 border-solid relative',
            getBorder()
          )}
        >
          <AnimatePresence>
            {loading ? (
              <motion.div
                initial='hidden'
                exit='hidden'
                animate='show'
                variants={loaderVariants}
                className='absolute top-0 left-0 w-full h-full bg-white z-10 flex flex-col gap-4 items-center justify-center select-none'
              >
                <CircularProgress variant='indeterminate' size={60} />
                <Typography variant='h5'>Loading</Typography>
              </motion.div>
            ) : (
              ''
            )}
          </AnimatePresence>
          <Outlet />
        </Card>
      </div>
    </div>
  );
};

const ResumePage = () => {
  return (
    <ResumeContextProvider>
      <Resume />
    </ResumeContextProvider>
  );
};

export default ResumePage;
