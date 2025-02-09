import { Input } from '@/components/Input';
import { Modal } from '@/components/Modal';
import { useCreateNote } from '@/screens/NoteView/hooks/useCreateNote';
import { useState } from 'react';

interface CreateNoteProps {
  toggleOpen: () => void;
  categoryId: string;
}

export const CreateNote = ({ categoryId, toggleOpen }: CreateNoteProps) => {
  const [title, setTitle] = useState('');

  const { mutate, isPending } = useCreateNote(toggleOpen);

  const handleAccept = () => {
    mutate({ categoryId, title });
  };

  return (
    <Modal
      acceptText="Add"
      cancelText="Cancel"
      onAccept={handleAccept}
      onCancel={toggleOpen}
      title="Add New note"
      isLoadingAccept={isPending}
    >
      <Input onChange={setTitle} value={title} className="w-96" />
    </Modal>
  );
};
