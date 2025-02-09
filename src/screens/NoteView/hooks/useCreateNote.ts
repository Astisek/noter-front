import { noteApi } from '@/api/note';
import { routerLinks } from '@/data/router';
import { NotificationEnum } from '@/models/notifications.model';
import { useNoteStore } from '@/stores/note.store';
import { useNotificationStore } from '@/stores/notification.store';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const useCreateNote = (onSuccess: () => void) => {
  const { addNote } = useNoteStore();
  const router = useRouter();
  const { addNotification } = useNotificationStore();

  return useMutation({
    mutationFn: noteApi.create,
    mutationKey: ['note', 'create'],
    onSuccess: ({ data }) => {
      addNote(data);
      onSuccess();
      addNotification({ variant: NotificationEnum.Success, text: 'Note created!' });
      router.push(routerLinks.noteView(data.category.id, data.id));
    },
  });
};
