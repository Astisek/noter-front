import { noteApi } from '@/api/note';
import { useNoteStore } from '@/stores/note.store';
import { useMutation } from '@tanstack/react-query';

export const useUpdateNote = () => {
  const { updateNote } = useNoteStore();

  return useMutation({
    mutationFn: noteApi.update,
    mutationKey: ['note', 'update'],
    onSuccess({ data }) {
      updateNote(data);
    },
  });
};
