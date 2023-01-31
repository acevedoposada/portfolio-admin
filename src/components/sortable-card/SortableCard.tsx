import { SortableElement, SortableHandle } from 'react-sortable-hoc';
import { RxChevronDown, RxDragHandleDots2 } from 'react-icons/rx';
import { Collapse } from '@mui/material';
import { useState } from 'react';
import clsx from 'clsx';

const DragHandle = SortableHandle(() => (
  <div className='cursor-move bg-slate-100 hover:bg-slate-200 rounded-l-md transition-colors flex items-center px-1'>
    <RxDragHandleDots2 size={22} className='text-slate-600' />
  </div>
));

const SortableCard = SortableElement(() => {
  const [open, setOpen] = useState(false);
  return (
    <div className='flex shadow-md rounded-md hover:bg-slate-50 hover:shadow-lg'>
      <DragHandle />
      <div className='p-4 flex-auto'>
        Item
        <Collapse in={open}>Additional content</Collapse>
      </div>
      <button
        className={clsx(
          'flex items-center bg-transparent border-0 px-2 cursor-pointer h-14 transition-all',
          { 'rotate-180': open }
        )}
        onClick={() => setOpen(!open)}
      >
        <RxChevronDown size={22} />
      </button>
    </div>
  );
});

export default SortableCard;
