'use client';
import { AnimatePresence } from 'motion/react';
import { Notification } from './Notification';
import { useNotificationStore } from '@/stores/notification.store';

export const NotificationController = () => {
  const { notifications } = useNotificationStore();

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 lg:right-4 lg:left-auto lg:top-4 lg:translate-x-0 max-w-xs ">
      <AnimatePresence>
        {notifications.map((notification) => (
          <Notification key={notification.id} notification={notification} />
        ))}
      </AnimatePresence>
    </div>
  );
};
