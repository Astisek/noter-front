import { noteApi } from '@/api/note';
import { useNoteStore } from '@/stores/note.store';
import { useMutation } from '@tanstack/react-query';

export const useNote = () => {
  const { setNotes } = useNoteStore();

  return useMutation({
    mutationFn: noteApi.findAll,
    mutationKey: ['note'],
    onSuccess: ({ data }) => {
      setNotes(data);
    },
  });
};
