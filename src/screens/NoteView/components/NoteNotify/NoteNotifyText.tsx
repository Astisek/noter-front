import { TimeFormatter } from '@/components/TimeFormatter';

interface NoteNotifyTextProps {
  lastUpdate: string;
  isSaving: boolean;
  isDirty: boolean;
}

export const NoteNotifyText = ({ isDirty, isSaving, lastUpdate }: NoteNotifyTextProps) => {
  if (isSaving) {
    return <>Saving...</>;
  }
  if (!isSaving && isDirty) {
    return <>Saved!</>;
  }
  if (lastUpdate) {
    return (
      <>
        Last update: <TimeFormatter isoTime={lastUpdate} />
      </>
    );
  }

  return <></>;
};
