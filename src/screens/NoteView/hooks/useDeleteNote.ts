import { noteApi } from '@/api/note';
import { routerLinks } from '@/data/router';
import { NotificationEnum } from '@/models/notifications.model';
import { useNoteStore } from '@/stores/note.store';
import { useNotificationStore } from '@/stores/notification.store';
import { useMutation } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';

export const useDeleteNote = (onSuccess: () => void) => {
  const { deleteNote, setActiveNote } = useNoteStore();
  const router = useRouter();
  const { categoryId } = useParams<{ categoryId: string }>();
  const { addNotification } = useNotificationStore();

  return useMutation({
    mutationFn: noteApi.delete,
    mutationKey: ['note', 'delete'],
    onSuccess: (_, id) => {
      deleteNote(id);
      setActiveNote(null);
      onSuccess();
      addNotification({ variant: NotificationEnum.Success, text: 'Note deleted!' });
      router.push(routerLinks.categoryView(categoryId));
    },
  });
};
