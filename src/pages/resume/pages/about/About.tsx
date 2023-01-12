// Libraries
import { Button, TextField, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import LoadingButton from '@mui/lab/LoadingButton';
import _ from 'lodash';

// Utils
import { useAboutPageController } from 'controllers/pages';

const childrenVariants = {
  hidden: { y: -100, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

const About = () => {
  const { aboutInfo, form, sending, cancelChanges } = useAboutPageController();
  const { values, handleChange, handleSubmit } = form;

  const hasChanges = _.isEqual(values, aboutInfo);

  return (
    <motion.form
      onSubmit={handleSubmit}
      className='px-3 flex flex-col gap-6'
      initial='hidden'
      animate='show'
      transition={{ staggerChildren: 0.05 }}
    >
      <motion.div variants={childrenVariants}>
        <Typography variant='h3'>What about you?</Typography>
        <Typography variant='body2' className='text-slate-500'>
          Talking about your professional profile
        </Typography>
      </motion.div>
      <motion.div variants={childrenVariants}>
        <TextField
          label='Description'
          multiline
          rows={4}
          className='w-full'
          value={values.description}
          name='description'
          onChange={handleChange}
        />
      </motion.div>
      <motion.div variants={childrenVariants}>
        <TextField
          label='Short description'
          multiline
          rows={2}
          className='w-full'
          value={values['short-description']}
          name='short-description'
          onChange={handleChange}
        />
      </motion.div>
      <motion.div
        variants={childrenVariants}
        className='flex justify-end gap-4 w-full'
      >
        <AnimatePresence>
          {!hasChanges && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <Button onClick={cancelChanges}>Cancel</Button>
            </motion.div>
          )}
        </AnimatePresence>
        <LoadingButton
          variant='contained'
          type='submit'
          loading={sending}
          disabled={hasChanges}
        >
          {!sending ? 'Save Changes' : 'Sending'}
        </LoadingButton>
      </motion.div>
    </motion.form>
  );
};

export default About;
