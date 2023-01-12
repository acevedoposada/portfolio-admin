import { ReactNode } from 'react';
import {
  TbCertificate,
  TbListCheck,
  TbPlant,
  TbStar,
  TbUser,
} from 'react-icons/tb';

export const BASE_RESUME_PAGE = '/dashboard/resume';

export enum SectionTypes {
  ABOUT = 'about',
  EDUCATION = 'education',
  EXPERIENCE = 'experience',
  INTEREST = 'interest',
  SKILL = 'skill',
}

export const getNavigationPath = (section: SectionTypes) =>
  `${BASE_RESUME_PAGE}/${section}`;

interface ResumeMenuValues {
  title: SectionTypes;
  description: string;
  icon: ReactNode;
  iconColor: string;
  color: string;
  borderColor: string;
}

const ICON_SIZE = 20;

export const resumeMenu: Record<`${SectionTypes}`, ResumeMenuValues> = {
  about: {
    title: SectionTypes.ABOUT,
    description: 'Describe yourself',
    icon: <TbUser size={ICON_SIZE} />,
    iconColor: 'text-sky-500',
    color: 'bg-sky-500',
    borderColor: 'border-sky-500',
  },
  education: {
    title: SectionTypes.EDUCATION,
    description: 'Where did you study?',
    icon: <TbCertificate size={ICON_SIZE} />,
    iconColor: 'text-amber-400',
    color: 'bg-amber-400',
    borderColor: 'border-amber-400',
  },
  experience: {
    title: SectionTypes.EXPERIENCE,
    description: 'Your old works',
    icon: <TbListCheck size={ICON_SIZE} />,
    iconColor: 'text-green-500',
    color: 'bg-green-500',
    borderColor: 'border-green-500',
  },
  interest: {
    title: SectionTypes.INTEREST,
    description: 'What do you like?',
    icon: <TbPlant size={ICON_SIZE} />,
    iconColor: 'text-red-500',
    color: 'bg-red-500',
    borderColor: 'border-red-500',
  },
  skill: {
    title: SectionTypes.SKILL,
    description: 'Your skills',
    icon: <TbStar size={ICON_SIZE} />,
    iconColor: 'text-lime-500',
    color: 'bg-lime-500',
    borderColor: 'border-lime-500',
  },
};
