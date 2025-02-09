import { Modal } from '@/components/Modal';
import { useDeleteNote } from '@/screens/NoteView/hooks/useDeleteNote';
import { useNoteStore } from '@/stores/note.store';

interface DeleteNoteModalProps {
  toggleIsOpen: () => void;
}

export const DeleteNoteModal = ({ toggleIsOpen }: DeleteNoteModalProps) => {
  const { activeNote } = useNoteStore();

  const { mutate, isPending } = useDeleteNote(toggleIsOpen);

  const handleDelete = () => {
    mutate(activeNote?.id);
  };
  return (
    <Modal
      acceptText="Delete"
      cancelText="Cancel"
      onAccept={handleDelete}
      onCancel={toggleIsOpen}
      title="Delete note"
      isLoadingAccept={isPending}
    >
      <p className="text-text">
        Are you sure you want to delete the note {activeNote?.title}? This action cannot be undone.
      </p>
    </Modal>
  );
};
