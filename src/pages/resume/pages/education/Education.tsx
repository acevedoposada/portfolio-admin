import { ReactNode } from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import { RxPlus } from 'react-icons/rx';
import { Button } from '@mui/material';
import { SortableCard } from 'components';

const Education = () => {
  const items = [1, 2, 3, 4];

  const SortableList = SortableContainer(
    ({ children }: { children: ReactNode }) => (
      <div className='flex flex-col gap-6'>{children}</div>
    )
  );

  return (
    <div>
      {/* @ts-ignore */}
      <SortableList onSortEnd={console.log} useDragHandle>
        {items.map((item) => (
          <SortableCard key={item} index={item} />
        ))}
      </SortableList>
      <Button className='w-full mt-3'>
        Add new section <RxPlus />
      </Button>
    </div>
  );
};

export default Education;
