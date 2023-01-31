import { Avatar, Card, TextField, Typography } from '@mui/material';
import { TbUser } from 'react-icons/tb';

import { useSettingsController } from 'controllers/pages';
import { LoadingButton } from '@mui/lab';

const Settings = () => {
  const { form } = useSettingsController();
  const { values, isSubmitting, handleSubmit, handleChange, handleBlur } = form;

  return (
    <div className='pt-8'>
      <Typography variant='h3'>Settings</Typography>
      <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-6'>
        <Card className='!shadow-xl bg-white p-6'>
          <div className='flex gap-3 items-center mb-6'>
            <Avatar className='bg-sky-400'>
              <TbUser size={22} />
            </Avatar>
            <Typography variant='subtitle1' className='text-lg'>
              User information
            </Typography>
          </div>
          <TextField
            label='Name'
            className='w-full'
            name='name'
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Card>
        <div />
        <div>
          <LoadingButton
            variant='contained'
            type='submit'
            loading={isSubmitting}
          >
            Save changes
          </LoadingButton>
        </div>
      </form>
    </div>
  );
};

export default Settings;
