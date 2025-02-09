import { userApi } from '@/api/user';
import { NotificationEnum } from '@/models/notifications.model';
import { useNotificationStore } from '@/stores/notification.store';
import { useUserStore } from '@/stores/user.store';
import { useMutation } from '@tanstack/react-query';

export const useUpdateProfile = () => {
  const { updateProfile } = useUserStore();
  const { addNotification } = useNotificationStore();

  return useMutation({
    mutationFn: userApi.changeAvatar,
    mutationKey: ['user', 'change-avatar'],
    onSuccess: ({ data: { url } }) => {
      updateProfile({ avatar_url: url });
      addNotification({ variant: NotificationEnum.Success, text: 'Avatar updated!' });
    },
  });
};
