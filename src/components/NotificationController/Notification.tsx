import { INotification, NotificationEnum } from '@/models/notifications.model';
import { ReactComponent as Cross } from '@/assets/svg/cross.svg';
import { ReactComponent as Success } from '@/assets/svg/success.svg';
import { ReactComponent as Error } from '@/assets/svg/error.svg';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import classnames from 'classnames';
import { useNotificationStore } from '@/stores/notification.store';
import * as motion from 'motion/react-client';

interface NotificationProps {
  notification: INotification;
}

export const Notification = ({ notification: { id, text, variant, duration } }: NotificationProps) => {
  const { removeNotification } = useNotificationStore();
  const timeout = useRef<number>(null);

  const handleRemove = useCallback(() => {
    removeNotification(id);
  }, [id, removeNotification]);

  useEffect(() => {
    timeout.current = window.setTimeout(handleRemove, duration);

    return () => window.clearTimeout(timeout.current);
  }, [duration, handleRemove, id, removeNotification]);

  const notificationIcon = useMemo(() => {
    switch (variant) {
      case NotificationEnum.Success:
        return { Icon: Success, className: 'bg-green-800 text-green-200' };
      default:
        return { Icon: Error, className: 'bg-red-800 text-red-200' };
    }
  }, [variant]);

  return (
    <motion.div
      className="flex items-center w-full max-w-xs p-4 mb-4 rounded-lg shadow-sm text-gray-400 bg-background-50"
      role="alert"
      initial={{
        opacity: 0,
        transform: 'translateX(520px)',
      }}
      animate={{
        opacity: 1,
        transform: 'translateX(0)',
      }}
      exit={{
        opacity: 0,
        transform: 'translateX(520px)',
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <div
        className={classnames(
          'inline-flex items-center justify-center shrink-0 w-8 h-8 rounded-lg',
          notificationIcon.className,
        )}
      >
        <notificationIcon.Icon className="w-5 h-5" />
      </div>
      <div className="ms-3 text-sm font-normal text-text">{text}</div>
      <button
        onClick={handleRemove}
        className="ms-auto -mx-1.5 -my-1.5  rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 inline-flex items-center justify-center h-8 w-8 text-text hover:text-white bg-background-50 shrink-0"
        data-dismiss-target="#toast-success"
        aria-label="Close"
      >
        <Cross className="w-3 h-3" />
      </button>
    </motion.div>
  );
};
