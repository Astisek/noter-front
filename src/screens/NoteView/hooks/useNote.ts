import { noteApi } from '@/api/note';
import { useNoteStore } from '@/stores/note.store';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

export const useNote = (id: string) => {
  const { setActiveNote } = useNoteStore();

  const query = useQuery({
    queryFn: () => noteApi.findOne(id),
    queryKey: ['note'],
    enabled: false,
  });

  useEffect(() => {
    if (query.isSuccess) {
      setActiveNote(query.data.data);
    }
  }, [query?.data?.data, query.isSuccess, setActiveNote]);

  return query;
};
