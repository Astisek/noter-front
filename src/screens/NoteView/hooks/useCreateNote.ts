import { noteApi } from '@/api/note';
import { useNoteStore } from '@/stores/note.store';
import { useMutation } from '@tanstack/react-query';

export const useCreateNote = (onSuccess: () => void) => {
  const { addNote } = useNoteStore();

  return useMutation({
    mutationFn: noteApi.create,
    mutationKey: ['note', 'create'],
    onSuccess: ({ data }) => {
      addNote(data);
      onSuccess();
    },
  });
};
