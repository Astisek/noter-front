import MarkdownView from '@/screens/NoteView/components/MarkdownView';
import { MarkdownEditor } from '@/screens/NoteView/components/NoteContent/MarkdownEditor';
import { useNoteContext } from '@/screens/NoteView/hooks/useNoteContext';

export const NoteContent = () => {
  const { isEdit } = useNoteContext();

  if (isEdit) {
    return <MarkdownEditor />;
  }

  return <MarkdownView />;
};
