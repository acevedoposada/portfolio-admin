import { Button, Card, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Component Styles
import { Bg, Container } from './NotFound.styles';

// Constants
import { Routes } from 'constants/nav.config';

const appearVariants = {
  hidden: { x: -200, opacity: 0 },
  shown: { x: 0, opacity: 1 },
};

const NotFound = () => {
  return (
    <Container>
      <Bg initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} />
      <div className='relative w-[750px] h-[300px]'>
        <Card
          component={motion.div}
          initial='hidden'
          animate='shown'
          transition={{ staggerChildren: 0.1 }}
          className='p-10 absolute w-full h-full shadow-2xl flex flex-col justify-center pr-[300px] overflow-hidden'
        >
          <Typography
            component={motion.p}
            variants={appearVariants}
            variant='h2'
            className='leading-none mb-3'
          >
            Sorry, page not found!
          </Typography>
          <Typography
            component={motion.p}
            variants={appearVariants}
            variant='body2'
            className='mb-6 text-slate-500'
          >
            Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
            mistyped the URL?
          </Typography>
          <motion.div variants={appearVariants}>
            <Link to={Routes.BASE} className='no-underline'>
              <Button variant='contained'>Go home</Button>
            </Link>
          </motion.div>
        </Card>
        <motion.img
          src='/assets/memojis/not-found.png'
          className='absolute w-[400px] -right-10 bottom-0'
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        />
      </div>
    </Container>
  );
};

export default NotFound;
