import { noteApi } from '@/api/note';
import { useNoteStore } from '@/stores/note.store';
import { useMutation } from '@tanstack/react-query';

export const useDeleteNote = () => {
  const { deleteNote } = useNoteStore();

  return useMutation({
    mutationFn: noteApi.delete,
    mutationKey: ['note', 'delete'],
    onSuccess: (_, id) => {
      deleteNote(id);
    },
  });
};
