import { getDocs, query, where } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import { useFormik } from 'formik';

import { ResumeContext } from 'context/resume.context';
import { SectionTypes } from 'constants/resume';

import { ResumeAboutSection } from 'models/resume';

import { getCollection } from 'utils/server';

export const useAboutPageController = () => {
  const { toggleLoading } = useContext(ResumeContext);

  const [aboutInfo, setAboutInfo] = useState<ResumeAboutSection>({
    id: '',
    description: '',
    'short-description': '',
  });

  const { values, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues: aboutInfo,
    onSubmit: (values) => {
      console.log(values);
    },
    enableReinitialize: true,
  });

  const cancelChanges = () => {
    resetForm({ values: aboutInfo });
  };

  const loadData = async () => {
    toggleLoading(true);
    const q = query(
      getCollection('resume'),
      where('type', '==', SectionTypes.ABOUT)
    );
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
    form: { values, handleChange, handleSubmit },
  };
};
