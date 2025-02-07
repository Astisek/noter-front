import { INoteRequest } from '@/api/models/note';
import { noteApi } from '@/api/note';
import { useNoteStore } from '@/stores/note.store';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

export const useNotes = (query: INoteRequest) => {
  const { setNotes } = useNoteStore();

  const notes = useQuery({
    queryKey: ['notes'],
    queryFn: () => noteApi.findAll(query),
  });

  useEffect(() => {
    if (notes.isSuccess) {
      setNotes(notes.data.data);
    }
  }, [notes?.data?.data, notes.isSuccess, setNotes]);

  return notes;
};
