import { ReactComponent as TrashSvg } from '@/assets/svg/trash.svg';
import { Button } from '@/components/Button';
import { DeleteNoteModal } from '@/screens/NoteView/components/DeleteNoteModal';
import { EditButton } from '@/screens/NoteView/components/NoteHeader/EditButton';
import { MarkdownInfo } from '@/screens/NoteView/components/NoteHeader/MarkdownInfo';
import { useReducer } from 'react';

export const Actions = () => {
  const [isDeleteModalOpen, toggleIsDeleteModalOpen] = useReducer((state) => !state, false);

  return (
    <>
      <EditButton />
      <Button variant="outline" onClick={toggleIsDeleteModalOpen}>
        <TrashSvg className="fill-text w-5 h-5" />
      </Button>
      <MarkdownInfo />
      {isDeleteModalOpen && <DeleteNoteModal toggleIsOpen={toggleIsDeleteModalOpen} />}
    </>
  );
};
