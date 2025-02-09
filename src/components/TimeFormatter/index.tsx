import { DateTime } from 'luxon';
import { useEffect, useState } from 'react';

interface TimeFormatterProps {
  isoTime: string;
}

export const TimeFormatter = ({ isoTime }: TimeFormatterProps) => {
  const [formattedTime, setFormattedTime] = useState('');

  useEffect(() => {
    const updateFormattedTime = () => {
      const now = DateTime.now();
      const date = DateTime.fromISO(isoTime);
      const diffInMinutes = Math.floor(now.diff(date, 'minutes').minutes);
      const diffInHours = now.diff(date, 'hours').hours;
      const diffInDays = now.diff(date, 'days').days;

      let newFormattedTime = '';

      if (diffInMinutes < 60) {
        newFormattedTime = `${diffInMinutes} min`;
      } else if (diffInHours < 24) {
        newFormattedTime = date.toFormat('HH:mm');
      } else if (diffInDays < 365) {
        newFormattedTime = date.toFormat('dd.MM');
      } else {
        newFormattedTime = date.toFormat('dd.MM.yyyy');
      }

      setFormattedTime(newFormattedTime);
    };

    updateFormattedTime();
    const interval = setInterval(updateFormattedTime, 60000);

    return () => clearInterval(interval);
  }, [isoTime]);

  return <>{formattedTime}</>;
};
