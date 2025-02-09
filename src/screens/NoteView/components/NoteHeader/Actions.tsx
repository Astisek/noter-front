import { ReactComponent as Trash } from '@/assets/svg/trash.svg';
import { Button } from '@/components/Button';
import { DeleteNoteModal } from '@/screens/NoteView/components/DeleteNoteModal';
import { useReducer } from 'react';

export const Actions = () => {
  const [isDeleteModalOpen, toggleIsDeleteModalOpen] = useReducer((state) => !state, false);

  return (
    <>
      <Button variant="outline" onClick={toggleIsDeleteModalOpen}>
        <Trash className="fill-text w-5 h-5" />
      </Button>

      {isDeleteModalOpen && <DeleteNoteModal toggleIsOpen={toggleIsDeleteModalOpen} />}
    </>
  );
};
