import {
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import { useFormik } from 'formik';

import { ResumeContext } from 'context/resume.context';
import { SectionTypes } from 'constants/resume';

import { ResumeAboutSection } from 'models/resume';

import { getCollection } from 'utils/server';
import { useSnackbar } from 'notistack';

export const useAboutPageController = () => {
  const [sending, setSending] = useState(false);
  const [aboutInfo, setAboutInfo] = useState<ResumeAboutSection>({
    id: '',
    description: '',
    'short-description': '',
  });

  const { toggleLoading } = useContext(ResumeContext);

  const { enqueueSnackbar } = useSnackbar();

  const collection = getCollection('resume');

  const { values, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues: aboutInfo,
    onSubmit: async (values) => {
      setSending(true);
      const documentRef = doc(collection, values.id);
      await updateDoc(documentRef, { ...values })
        .then(() => {
          setAboutInfo(values);
          enqueueSnackbar('Saved changes successfully', {
            variant: 'success',
            autoHideDuration: 3000,
            anchorOrigin: { horizontal: 'right', vertical: 'bottom' },
          });
        })
        .catch((error) => {
          console.error(error);
          enqueueSnackbar('An error was ocurred', {
            variant: 'error',
            autoHideDuration: 3000,
            anchorOrigin: { horizontal: 'right', vertical: 'bottom' },
          });
        })
        .finally(() => {
          setSending(false);
        });
    },
    enableReinitialize: true,
  });

  const cancelChanges = () => {
    resetForm({ values: aboutInfo });
  };

  const loadData = async () => {
    toggleLoading(true);
    const q = query(collection, where('type', '==', SectionTypes.ABOUT));
    (await getDocs(q)).forEach((doc) => {
      const data = <Omit<ResumeAboutSection, 'id'>>doc.data();
      setAboutInfo({ id: doc.id, ...data });
      toggleLoading(false);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  return {
    aboutInfo,
    cancelChanges,
    sending,
    form: { values, handleChange, handleSubmit },
  };
};
