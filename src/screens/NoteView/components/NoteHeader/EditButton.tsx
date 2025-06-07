import { ReactComponent as PencilEditSvg } from '@/assets/svg/pencil-edit.svg';
import { ReactComponent as SaveSvg } from '@/assets/svg/save.svg';
import { Button } from '@/components/Button';
import { useNoteContext } from '@/screens/NoteView/hooks/useNoteContext';

export const EditButton = () => {
  const { toggleIsEdit, isEdit, handleSaveNote } = useNoteContext();

  if (isEdit) {
    return (
      <Button variant="outline" onClick={handleSaveNote}>
        <SaveSvg className="fill-text w-5 h-5" />
      </Button>
    );
  }

  return (
    <Button variant="outline" onClick={toggleIsEdit}>
      <PencilEditSvg className="fill-text w-5 h-5" />
    </Button>
  );
};
